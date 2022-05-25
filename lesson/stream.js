const fs = require('fs')
const path = require('path')

// fs.readFile(path.resolve(__dirname, 'txtForStream.txt'), (err, data) => {
//     if (err) {
//         throw err
//     }
//     console.log(data)
// })

const readableStream = fs.createReadStream(path.resolve(__dirname, 'txtForStream.txt'))
//
// readableStream.on('data', (chunk) => {
//     console.log(chunk)
// })
//
// const writableStream = fs.createWriteStream(path.resolve(__dirname, 'txtForWritable.txt'))
// for (let i = 0; i < 20; i++) {
//     writableStream.write(i + '\n')
// }
// writableStream.end()