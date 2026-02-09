//CALL STACK
// const a = ()=>{
//     b();
//     console.log("a");
// };

// const b =()=>{
//     console.log("B");
// };

// a();


//2nd
const a = ()=>{
    b();
    console.log("a");
};

const b =()=>{
    console.log("B");
    setTimeout(()=>{
        console.log("Timer");
    },0);
};

a();
console.log("Final");




