let a;
if(1 === 1) {
    const { largeNumber } = await import("./script1.js");
    a = largeNumber
}

// const response = await fetch("https://jsonplaceholder.typicode.com/users");
// const data = await response.json();
console.log(a);