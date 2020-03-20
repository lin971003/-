const fs = require('fs')

// 读文件本质上是异步的，sync这个api只是看上是同步
// fs.readFile
fs.readFileSync('./readme')