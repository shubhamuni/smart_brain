// const script2 = require("./script1");
import { largeNumber } from "./script1.mjs";


const a = largeNumber;
const response = await fetch("https://jsonplaceholder.typicode.com/users");
const data = await response.json();
console.log(data);