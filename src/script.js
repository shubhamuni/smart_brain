// const script2 = require("./script1");
const { largeNumber } = await("./script1.js");

const response = await fetch("https://jsonplaceholder.typicode.com/users");
const data = await response.json();
console.log(data);

console.log(largeNumber)