import React from 'react'

const Test = () => {
    const promise = new Promise ((resolve, reject) => {
        if (true) {
            resolve("Stuff worked");
        } else {
            reject("Error, it broken");
        }
    })
    const result =  promise.then(result => console.log(result))
  return (
    <div>
      <h1>The result of given test is {result}</h1>
    </div>
  )
}

export default Test
