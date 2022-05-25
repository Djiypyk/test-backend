let https = require('https')
const dotenv = require('dotenv')
const path = require('path')
dotenv.config()
https.createServer(() => {
})

console.log(process.pid);
console.log(process.env.PORT);
console.log(process.env.NODE_ENV);

// ----------------------------
const siteURL = 'http://localhost:8080/users?id=5252'
const url = new URL(siteURL)