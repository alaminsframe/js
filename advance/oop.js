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

// class student{
//     constructor(){
//         console.log('this is constructor function')
//     }

//     hello(){
//         console.log('this is normal function')
//     }
// }

// let std = new student(); //constructor function auto load first



// class student{
//     constructor(){
//         let name;
//         console.log('this is constructor function')
//     }

//     hello(){
//         console.log(`hello ${this.name}`)
//     }
// }

// let std = new student();

// std.name = 'Rocky'
// std.hello()





class student{
    constructor(name){
        this.name = name;
        console.log('this is constructor function')
    }

    hello(){
        console.log(`hello ${this.name}`)
    }
}

let std = new student('Rocky');

std.hello()