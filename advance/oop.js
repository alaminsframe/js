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





// class student{
//     constructor(name){
//         this.name = name;
//         console.log('this is constructor function')
//     }

//     hello(){
//         console.log(`hello ${this.name}`)
//     }
// }

// let std = new student('Rocky');

// std.hello()




class student{
    constructor(name, age){
        this.name = name;
        this.age = age;
        //console.log('this is constructor function')
    }

    hello(){
        console.log(`hello ${this.name} your age is ${this.age}`)
    }
}

let std1 = new student('Rocky',20);
let std2 = new student('Socky',21);
let std3 = new student('Tocky',22);
std1.hello()
std2.hello()
std3.hello()