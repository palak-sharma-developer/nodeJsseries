// Synchronous vs Asynchronous Programming in NODE JS
// Synchronous - in  console.log(data) function first console.log(data) then console.log("after the data") is show

const  fs = require("fs");
// const  data = fs.readFileSync("read.txt" , "UTF-8")
// console.log(data)
// console.log("after the data")

// Asynchronous - but Asynchronous not waiting console.log("after the data") show and when  console.log(data) ready the
// console.log(data) then shows
fs.readFile('read.txt' , "UTF-8" ,(err , data )=>{
    console.log(data)
})
console.log("after the data")