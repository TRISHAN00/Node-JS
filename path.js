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


path.join('usr', 'local', 'fileName', 'test.js')

path.resolve(__dirname, 'scripts', 'test.js')

console.log(path.parse(myCurrentPath));