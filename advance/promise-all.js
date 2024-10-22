// let p1 = new Promise( (resolve,reject)=>{
//     setTimeout( ()=>{
//         console.log("this is first promise");
//         resolve(1);
//     },1000)
// })

// let p2 = new Promise( (resolve,reject)=>{
//     setTimeout( ()=>{
//         console.log("this is second promise");
//         resolve(2);
//     },2000)
// })

// let p3 = new Promise( (resolve,reject)=>{
//     setTimeout( ()=>{
//         console.log("this is third promise");
//         resolve(3);
//     },3000)
// })

// Promise.all([p1,p2,p3]).then( (data)=>{console.log(data)}).catch( (data)=>{console.log(data)})




let p1 = new Promise( (resolve,reject)=>{
    setTimeout( ()=>{
        console.log("this is first promise");
        resolve(1);
    },1000)
})

let p2 = new Promise( (resolve,reject)=>{
    setTimeout( ()=>{
        console.log("this is second promise");
        resolve(2);
    },2000)
})

let p3 = new Promise( (resolve,reject)=>{
    setTimeout( ()=>{
        console.log("this is third promise");
        resolve(3);
    },3000)
})

var  total = 0;
Promise.all([p1,p2,p3])
.then( (data)=>{
    for(i in data){
        total =+ data[i];
    };
    console.log(data) 
    console.log(total);
    
})
.catch( (data)=>{
    console.log(data)
})



