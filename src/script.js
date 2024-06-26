// const fs = require('fs')

// function question1 () {
//     fs.readFile('./santa.txt', (err, data)=>{
//         console.time('q = 1 santa-time');
//         const direction = data.toString();
//         const directionArray = direction.split('');
//         const answer = directionArray.reduce((acc,cur)=>{
//             if(cur === '('){
//                 return acc +=1;
//             }
//             else if (cur === ')') {
//                 return acc -= 1;
//             }
//         },0)
//         console.timeEnd('q = 1 santa-time');
//         console.log('Floor: ',answer)
//     })
// }

// question1();

// //2 - When does santa first enter the basement 
// function question2 () {
//     fs.readFile('./santa.txt', (err, data)=> {
//         console.time('q = 2 santa-time');
//         const directions = data.toString();
//         const directionsArray = directions.split('');
//         let accumulator = 0;
//         let counter = 0;
//         const answer = directionsArray.some((currentItem) => {
//             if (currentItem === '(') {
//                 accumulator += 1;
//             }
//             else if (currentItem === ')') {
//                 accumulator -= 1;
//             }
//             counter++
//             return accumulator < 0;
//         })
//         console.timeEnd('q = 2 santa-time');
//         console.log('Basement entered at: ',counter);
//     })
// }
// question2();
const express = require("express")
const bodyParser = require('body-parser')


const app = express();
app.use(express.json());
const database = {
    users: [
        {
            id:121,
            name:"Shubham",
            email:"shubham@gmail.com",
            password:"anything",
            entries: 0,
            joined: new Date()
        },
        {
            id:124,
            name:"jhon",
            email:"jhon@gmail.com",
            password:"everything",
            entries: 0,
            joined: new Date()
        },
        {
            id:Math.floor(Math.random() * 900) + 100,
            name:"sandesh",
            email:"sandesh@gmail.com",
            password:"anywhere",
            entries: 0,
            joined: new Date()
        }
    ]
}
app.get('/',(req, res)=> {
    res.send('this is working')
})
app.post('/signin', (req, res)=>{
    if(req.body.email === database.users[2].email && req.body.password === database.users[2].password){
        res.json(database.users[2])
    } else {
        res.status(400).json('Error logging in')
    }
})
let count;
app.post('/register', (req, res) =>{
    const { email, name, password } = req.body
    count++
    database.users.push({
        id: Math.floor(Math.random() * 900) + 100,
        name: name,
        email: email,
        password: password,
        entries: count,
        joined: new Date()
    });
    res.json(database.users[database.users.length-1])
})
app.listen(3000,()=>{
    console.log('Server is running on localhost:3000')
})

// 
// const fs = require("fs")

// console.time("startcheck") //to check time required to process code from console.time() to console.timeEnd()

// fs.readFile('./hello.txt',(err, data) => {
//     if(err){
//         console.log('Error',err)
//     }
//     console.log('Async', data.toString('utf-8'))
// })
// const file = fs.readFileSync('./hello.txt');
// console.log('Sync',file.toString())
// //Below line adds " this is test" sentence to end of hello.txt content
// fs.appendFile('./hello.txt', " this is test", err => console.log(err))
// fs.writeFile("bye.txt","Sad to see you bye",err => 
//   {  if (err)  {
//     console.log(err)
// }})
// fs.unlink("./bye.txt",err => 
//     {  if (err)  {
//       console.log(err)
//   }
//   console.log("Inception")
// })
 
// const app = express();

// app.use(express.static(__dirname + '../../public'))

// app.use((req, res, next)=>{
//     console.log("Hello")
// }) 
// app.listen(3001);
// console.timeEnd("startcheck") //to check time required to process code from console.time() to console.timeEnd()
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