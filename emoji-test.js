const fs = require('fs');
const readline = require('readline');

let group = 'N/A';
let subgroup = 'N/A';

function getGroupName(line, groupType) {
    return line.split(groupType)[1]
}

async function processLineByLine() {
    const fileStream = fs.createReadStream('emoji-test.txt');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    for await (const line of rl) {
        // Each line in input.txt will be successively available here as `line`.
        // console.log(`Line from file: ${line}`);
        if (line.includes('# group: ')) {
            group = getGroupName(line, '# group: ');
            console.log(`group: ${group}`);
        }
        if (line.includes('# subgroup: ')) {
            subgroup = getGroupName(line, '# subgroup: ');
            console.log(`subgroup: ${subgroup}`);
        }
        // if (line.includes('; fully-qualified')) {
        //     console.log(`Line from file: ${line}`);
        // }
    }
}

processLineByLine();