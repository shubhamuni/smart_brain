const express = require("express")
const fs = require("fs")


fs.readFile('./hello.txt',(err, data) => {
    if(err){
        console.log('Error',err)
    }
    console.log('Async', data.toString('utf-8'))
})
const file = fs.readFileSync('./hello.txt');
console.log('Sync',file.toString())
//Below line adds " this is test" sentence to end of hello.txt content
fs.appendFile('./hello.txt', " this is test", err => console.log(err))

const app = express();

app.use(express.static(__dirname + '../../public'))

app.listen(3001);
console.log(fs)
// let a;
// if(true) {
//     const { largeNumber } = await import("./script1.js");
//     a = largeNumber
// }
// console.log(a)
// // const response = await fetch("https://jsonplaceholder.typicode.com/users");
// // const data = await response.json();
// console.log(a);
// console.log(__dirname)
// import { createServer } from "http";
// const server = createServer(()=>{
//     console.log("I hear you, thanks for request")
// })
// server.listen(3001);
// let a;
// if(true) {
//     const { largeNumber } = await import("./script1.js");
//     a = largeNumber
// }

// // const response = await fetch("https://jsonplaceholder.typicode.com/users");
// // const data = await response.json();
// console.log(a);