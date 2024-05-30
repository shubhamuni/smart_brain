const express = require("express")
const fs = require("fs")

console.time("startcheck") //to check time required to process code from console.time() to console.timeEnd()

fs.readFile('./hello.txt',(err, data) => {
    if(err){
        console.log('Error',err)
    }
    console.log('Async', data.toString('utf-8'))
})
const file = fs.readFileSync('./hello.txt');
console.log('Sync',file.toString())
//Below line adds " this is test" sentence to end of hello.txt content
// fs.appendFile('./hello.txt', " this is test", err => console.log(err))
// fs.writeFile("bye.txt","Sad to see you bye",err => 
//   {  if (err)  {
//     console.log(err)
// }})
fs.unlink("./bye.txt",err => 
    {  if (err)  {
      console.log(err)
  }
  console.log("Inception")
})
 
const app = express();

app.use(express.static(__dirname + '../../public'))

app.use((req, res, next)=>{
    console.log("Hello")
}) 
app.listen(3001);
console.timeEnd("startcheck") //to check time required to process code from console.time() to console.timeEnd()
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