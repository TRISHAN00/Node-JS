const path = require('path')
const myCurrentPath = __filename
const dirName = __dirname

path.basename(dirName)
path.extname(myCurrentPath)

let pathObj = {
    dir: 'usr/local',
    name: 'testFile',
    ext: '.js'
}

path.format(pathObj)


console.log(path.join('usr', 'local', 'fileName', 'test.js'));