const express = require("express")

const app = express();

app.use(express.static(__dirname + '/public'))

app.listen(3001);

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