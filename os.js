const os = require('os')
const cluster = require('cluster')

// os.platform()
// console.log(os.cpus().length)

if (cluster.isMaster) {
    for (let i = 0; i < os.cpus().length - 2; i++) {
        cluster.fork()
    }
    cluster.on('exit', (worker) => {
        console.log(`Worker with pid = ${worker.process.pid} dead `)
        cluster.fork()
    })
} else {
    console.log(`Воркер с pid= ${process.pid} запущен `)
    setInterval(() => {
        console.log(`Воркер с pid= ${process.pid} всё ещё работает `)
    }, 5000)
}