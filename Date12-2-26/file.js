//promise
// const fetchdata = new Promise((resolve,reject)=>{
//     const success = false;

const { response } = require("express");

//     if(success){
//         resolve("Data Fetched");//success case
//         console.log("Data fetched");
//     }else{
//         reject ("No Data Found");//failure case
//         console.log("Data Not fetch");
//     }
// })

// fetchdata.catch((err)=>{
//     console.log(err);
// })

//ERROR HANDLING

// const fetchdata = new Promise((resolve,reject)=>{
//     const success = false;
//     // const success = true;

//     if(success){
//         resolve("Data Fetched");//success case
//         // console.log("Data fetched");
//     }else{
//         reject ("No Data Found");//failure case
//         // console.log("Data Not fetch");
//     }
// })

// // fetchdata.catch((err)=>{
// //     console.log(err);
// // })
// fetchdata
// .then((messege)=>{
//     console.log(messege);//run when promise is success
// })
// .catch((err)=>{
//     console.log(err);//run when promise is reject
// })



//3rd



// const fetchdata = new Promise((resolve,reject)=>{
//     const success = false;
//     // const success = true;

//     if(success){
//         resolve("Data Fetched");//success case
//         // console.log("Data fetched");
//     }else{
//         reject ("No Data Found");//failure case
//         // console.log("Data Not fetch");
//     }
// })

// // fetchdata.catch((err)=>{
// //     console.log(err);
// // })
// fetchdata
// .then((messege)=>{
//     console.log(messege);//run when promise is success
// })
// .catch((err)=>{
//     console.log(err);//run when promise is reject
// })

// //()=>{}
// //()=>()

// const value =() =>5 //directly return the value
// const value1 =()=> (5) // same as above
// const value2 =()=>{return 5}




//4th


// const getuser =()=>{
//    return Promise.resolve("User List Fetched");
// };

// const getusername =()=>{
//    return Promise.resolve("user detail fetched");
// };

// const login = ()=>{
//     return Promise.resolve("Log in success");
//}

//normal call
// login().then((res)=>{
//     console.log("AAJA JANEMAN LOIGN HAI",res);
//     getuser().then((res)=>{
//         console.log("User detail fetch",res);
//         getusername().then((res)=>{
//             console.log("result",res);

//         })
//     })
// });

//channing
// login()
//     .then((res)=>{
//         console.log("result",res);
//         return getuser();
//     }).then((res)=>{
//         console.log("Result2",res);
//         return getusername();
//     }).then((res)=>{
//         console.log("result3",res);
//     })




Promise.resolve(10)
    .then((x)=>{
        console.log(x);
        return x+10;
    })
    .then((x)=>{
        console.log(x);
        return x+5;
    })
    .then(console.log());