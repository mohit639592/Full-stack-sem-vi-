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
// const a = ()=>{
//     b();
//     console.log("a");
// };

// const b =()=>{
//     console.log("B");
//     setTimeout(()=>{
//         console.log("Timer");
//     },0);
// };

// a();
// console.log("Final");


//3rd
// const a = ()=>{
//     b();
//     console.log("a");
// };

// const b =()=>{
//     console.log("B");
//     setTimeout(()=>{
//         console.log("b Timer1");
//     },5000);
//     setTimeout(()=>{
//         console.log("B timer2");
//     },3000);
// };

// a();
// console.log("Final");



//4
// const a = ()=>{
//     b();
//     console.log("a");
// };

// const b =()=>{
//     console.log("B");
//     setTimeout(()=>{
//         console.log("b Timer1");
//     },0);
//     setTimeout(()=>{
//         console.log("B timer2");
//     },0);

//     Promise.resolve().then (()=>{
//         console.log("Promise");
//     })
// };

// a();
// console.log("Final");


//5
const sample =(callback)=>{
    callback("Sample Content","demo");//???????
};
const add = (a,b)=>{
    console.log("data",a+b);
}
// sample((data)=>{
//     console.log("data",data);
// })

sample(add);