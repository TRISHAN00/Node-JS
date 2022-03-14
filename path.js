const path = require('path')
const myCurrentPath = __filename
const dirName = __dirname

console.log(path.basename(dirName));
console.log(path.extname(myCurrentPath));

let pathObj = {
    dir: 'usr/local',
    name: 'testFile',
    ext: '.js'
}

console.log(path.format(pathObj));