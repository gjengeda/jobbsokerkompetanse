const fs = require('fs');
const path = require('path');

function readFile(dir, file) {
    try {
        return fs.readFileSync(path.join(dir, file), 'utf8');
    } catch(e) {
        console.log('Error:', e.stack);
    }
}

function createJson(katalog) {
    return 'export default {\'nb\':{' + read(katalog) + '},\'en\':{}};';
}

const read = (dir) =>
    fs.readdirSync(dir)
        .reduce((files, file) =>
            fs.statSync(path.join(dir, file)).isDirectory() ?
                files.concat(read(path.join(dir, file))) :
                files.concat(
                    "'" + file.split('_')[0] + "'" + ':' + "'" + readFile(dir, file).trim() + "'"
                ), []);

try{
    fs.writeFileSync('./src/tekster/sporsmal-tekster.ts', createJson('./src/tekster/sporsmal'));
}catch (e){
    console.log("Kunne ikke skrive fil ", e);
}

console.log(read('./src/tekster/sporsmal'));

