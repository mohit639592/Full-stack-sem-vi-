// import  add from "./unitil.js"
// const  output = add(2,484153468453)
// console.log(output)


// export const number = 5

// import fs from "fs";
// import path from "path";

// const cpath = path.join(
//     "functions",
//     "sampleFolder",
//     ".",
//     "function.js"
// );
// consolele.log("PATH NAME",cpath);

// fs.readFile(cpath,"utf8",(err,data)=>{
//     console.log("err",err);
//     console.log("data",data);
// })

// const filePath = path.resolve("./file.txt");

// const readFile = () => {
//     const content = fs.readFileSync(filePath, "utf8");
//     console.log(content);
// }

// readFile();


//5-02-2026
//Method 1
// const ab = require("./unitil");

// const additon =ab.add(2,3);
// console.log(additon);

// const multiplication = ab.multi(5,6);
// console.log(multiplication);


//Method 2
//Here the name of variable should be same as function name
const {add,multi} = require("./utils")//------------->>>> priority---->> utils,utils.js,utils.json,utils/

const additon =add(2,3);
console.log(additon);

const multiplication = multi(5,6);
console.log(multiplication);

