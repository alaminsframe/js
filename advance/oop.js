//##### basic #####

// class hello{
//     message(){
//         console.log('hello world')
//     }
// }

// let msg = new hello();
// msg.message()
// console.log(typeof msg)


//##### constructor #####

class student{
    constructor(){
        console.log('this is constructor function')
    }

    hello(){
        console.log('this is normal function')
    }
}

let std = new student(); //constructor function auto load first

