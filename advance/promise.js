const promiseOne = new Promise(function(resolve, reject){
     setTimeout(function(){
        console.log('task is complete');
        resolve();
        }, 1000)
    }
);

promiseOne.then(function(){
    console.log("promise comsumed");
})