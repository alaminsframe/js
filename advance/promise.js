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


promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Task two complete");
        resolve()
    },1000)
})

promiseTwo.then(function(){
    console.log("resolved");
})