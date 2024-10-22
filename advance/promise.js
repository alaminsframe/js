const promisezero = new Promise(function(resolve, reject){
    setTimeout(function(){
      // console.log('task is complete');
       resolve();
       }, 1000)
   }
);

promisezero.then(function(){
   //console.log("promise comsumed");
})

const promiseOne = new Promise(function(resolve, reject){
     setTimeout(function(){
       // console.log('task is complete');
        resolve();
        }, 1000)
    }
);

promiseOne.then(function(){
    //console.log("promise comsumed");
})


const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({name: "hello", mail: "hello@mail.com"})
    },1000)
})

promiseTwo.then(function(userData){
    //console.log(userData);
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        let err = false;
        if(!err){
            resolve({name: "hello", Pass: "123"})
        }else{
            reject("Error");
        }
    },1000)
})

const userName = promiseThree
.then((userData)=>{
    console.log(userData);
    return userData.name;
})
.then((name)=> {console.log(name);
})
.catch((err)=>{console.log(err);
})
.finally(()=>{
    console.log("this is final result");
    
})