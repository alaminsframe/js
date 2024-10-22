// const promisezero = new Promise(function(resolve, reject){
//     setTimeout(function(){
//       // console.log('task is complete');
//        resolve();
//        }, 1000)
//    }
// );

// promisezero.then(function(){
//    //console.log("promise comsumed");
// })

// const promiseOne = new Promise(function(resolve, reject){
//      setTimeout(function(){
//        // console.log('task is complete');
//         resolve();
//         }, 1000)
//     }
// );

// promiseOne.then(function(){
//     //console.log("promise comsumed");
// })


// const promiseTwo = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({name: "hello", mail: "hello@mail.com"})
//     },1000)
// })

// promiseTwo.then(function(userData){
//     //console.log(userData);
// })


// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let err = false;
//         if(!err){
//             resolve({name: "hello", Pass: "123"})
//         }else{
//             reject("Error");
//         }
//     },1000)
// })

// const userName = promiseThree
// .then((userData)=>{
//     console.log(userData);
//     return userData.name;
// })
// .then((name)=> {console.log(name);
// })
// .catch((err)=>{console.log(err);
// })
// .finally(()=>{
//     console.log("this is final result");
    
// })



// function prom(com){
//     return new Promise( (resolve, reject) => { 
//         if(com){
//             resolve("success")
//         }else{
//             reject("error")
//         }
//     })
// }

// console.log(prom(true));




// function prom(com){
//     return new Promise( (resolve, reject) => { 
//         if(com){
//             resolve("success")
//         }else{
//             reject("error")
//         }
//     })
// }

// let onSuccess = (msg)=>{
//     console.log(msg);
// };
// let onReject= (msg)=>{
//     console.log(msg);
// }

// prom(true).then(onSuccess).catch(onReject)

function prom(com){
    return new Promise( (resolve, reject) => { 
        console.log("please wait....");
        setTimeout( () => {
            if(com){
                resolve("success")
            }else{
                reject("error")
            }
        },1000)
    })
}

prom(true).then((msg)=>{ 
    console.log(msg);
}).catch((msg)=>{
    console.log(msg);
})



