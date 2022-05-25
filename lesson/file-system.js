const fs = require('fs')
const path = require('path')

// fs.mkdirSync(path.resolve(__dirname, 'dir', 'dir2', 'dir3'), {recursive: true})
// fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('Папка создана')
// })

// fs.rmdir(path.resolve(__dirname, 'dir'), (err)=>{
//     if (err){
//         throw err
//     }
// })

// fs.writeFile(path.resolve(__dirname, 'text.txt'), 'Hello World!', (err) => {
//     if (err) {
//         throw err
//     }
//     console.log('Файл записан')
// })

// fs.appendFile(path.resolve(__dirname, 'text.txt'), ' I`m Nikolai!', (err) => {
//     if (err) {
//         throw err
//     }
//     console.log('Файл записан')
// })