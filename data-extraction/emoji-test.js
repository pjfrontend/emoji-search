/* eslint-disable guard-for-in */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const readline = require('readline');

function sortVersions(a, b) {
  if (a.length < b.length) {
    return -1;
  }
  if (a.length > b.length) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

const sanitiseKeyword = (x) =>
  x
    .replace(':', '')
    .replace('(', '')
    .replace(')', '')
    .replace('’', "'")
    .replace('“', '')
    .replace('”', '')
    .replace(',', '')
    .toLowerCase();

function getObjectFromLine(line, group, subgroup) {
  const [head, tail] = line.split('; fully-qualified     # ');
  const code = head.trim();
  const [emoji, since, ...rest] = tail.split(' ');
  const keywords = rest.map(sanitiseKeyword);
  return {code, emoji, since, keywords, group, subgroup};
}

function getGroupName(line, groupType) {
  return line.split(groupType)[1];
}

async function convertTXTtoJSON() {
  const fileStream = fs.createReadStream('emoji-test.txt');
  let group = 'N/A';
  let subgroup = 'N/A';
  const data = {
    emojis: {},
    groups: {},
    versions: [],
    keywords: [],
  };

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    if (line.includes('# group: ')) {
      group = getGroupName(line, '# group: ');
      data.groups[group] = [];
      // console.log(`group: ${group}`);
    }
    if (line.includes('# subgroup: ')) {
      subgroup = getGroupName(line, '# subgroup: ');
      data.groups[group].push(subgroup);
      // console.log(`subgroup: ${subgroup}`);
    }
    if (line.includes('; fully-qualified')) {
      const obj = getObjectFromLine(line, group, subgroup);
      data.emojis[obj.emoji] = obj;
      data.versions.push(obj.since);
      for (const kw of obj.keywords) {
        data.keywords.push(kw);
      }
      // console.log(`Line from file: ${JSON.stringify(obj)}`);
    }
  }

  // only different versions, sorted
  data.versions = Array.from(new Set(data.versions)).sort(sortVersions);
  // unique keywords
  data.keywords = Array.from(new Set(data.keywords)).sort();

  fs.writeFile('emoji.json', JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log('emoji.json written');
  });

  // now let's precalculate possible searches
  const reverseLookup = {
    subgroups: {},
    versions: {},
    keywords: {},
  };
  for (const e in data.emojis) {
    const obj = data.emojis[e];
    if (Object.hasOwn(reverseLookup.versions, obj.since)) {
      reverseLookup.versions[obj.since].push(e);
    } else {
      reverseLookup.versions[obj.since] = [e];
    }
    if (Object.hasOwn(reverseLookup.subgroups, obj.subgroup)) {
      reverseLookup.subgroups[obj.subgroup].push(e);
    } else {
      reverseLookup.subgroups[obj.subgroup] = [e];
    }
    for (const kw of obj.keywords) {
      const safeKeyword = sanitiseKeyword(kw);
      if (Object.hasOwn(reverseLookup.keywords, safeKeyword)) {
        reverseLookup.keywords[safeKeyword].push(e);
      } else {
        reverseLookup.keywords[safeKeyword] = [e];
      }
    }
  }

  fs.writeFile('lookup.json', JSON.stringify(reverseLookup), (err) => {
    if (err) throw err;
    console.log('lookup.json written');
  });
}

convertTXTtoJSON();
