const fs = require('fs');
const readline = require('readline');

function comparePartials(a, b) {
    if (a === b) {
        return 0;
    }
    if (a.length < b.length) {
        return -1
    }
    if (a.length > b.length) {
        return 1
    }
    if (a < b) {
        return -1
    }
    if (a > b) {
        return 1
    }
}

function getObjectFromLine(line, group, subgroup) {
    const [head, tail] = line.split('; fully-qualified     # ')
    const code = head.trim()
    const [emoji, since, ...rest] = tail.split(' ')
    const description = rest.join(' ')
    return { code, emoji, since, description, group, subgroup }
}

function getGroupName(line, groupType) {
    return line.split(groupType)[1]
}

async function processLineByLine() {
    const fileStream = fs.createReadStream('emoji-test.txt');
    let group = 'N/A';
    let subgroup = 'N/A';
    const data = {
        emojis: [],
        groups: {},
        versions: [],
    };

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    for await (const line of rl) {
        // console.log(`Line from file: ${line}`);
        if (line.includes('# group: ')) {
            group = getGroupName(line, '# group: ');
            data.groups[group] = []
            // console.log(`group: ${group}`);
        }
        if (line.includes('# subgroup: ')) {
            subgroup = getGroupName(line, '# subgroup: ');
            data.groups[group].push(subgroup)
            // console.log(`subgroup: ${subgroup}`);
        }
        if (line.includes('; fully-qualified')) {
            const obj = getObjectFromLine(line, group, subgroup)
            data.emojis.push(obj);
            data.versions.push(obj.since)
            // console.log(`Line from file: ${JSON.stringify(obj)}`);
        }
    }

    // only different versions, sorted
    data.versions = Array.from(new Set(data.versions)).sort(comparePartials);

    fs.writeFile("emoji.json", JSON.stringify(data), function (err) {
        if (err) throw err;
        console.log('complete');
    }
    );
}

processLineByLine();