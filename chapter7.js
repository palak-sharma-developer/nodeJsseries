// #7: Node.JS Asynchronous File System Core Modules | Reading and Writing File Asynchronously
const  fs = require("fs")
fs.writeFile('read.txt' , 'today is a awesome day : ' , ()=>{
        console.log("files is created")
})
fs.appendFile("read.txt" , "pls like and share webdeveloper" , (err)=>{
    console.log('task completed')
})
fs.readFile('read.txt' , 'UTF-8', (err,data)=>{
    console.log(data)
})

