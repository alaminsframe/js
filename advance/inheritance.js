// class students{
//     constructor(){
//         console.log('this is constructor method')
//     }

// }

// class goodStd extends students{

// }
// let obj = new goodStd();


// class students{
//     constructor(){
//         console.log('this is constructor method of students')
//     }

// }

// class goodStd extends students{
//     constructor(){
//         super();
//         console.log('this is constructor method of goodStd')
//     }
// }
// let obj = new goodStd();



// class students{
//     constructor(name){
//         this.name = name;
//         console.log('this is constructor method of students')
//     }
//     info(){
//         console.log(`student name is ${this.name}`)
//     }

// }

// class goodStd extends students{
//     info(){
//         console.log(`Good student name is ${this.name}`)
//     }
       
// }
// let obj = new goodStd('hello hi');
// obj.info()




class students{
    constructor(name){
        this.name = name;
        console.log('this is constructor method of students')
    }
    info(){
        console.log(`student name is ${this.name}`)
    }

}

class goodStd extends students{
    info(){
        super.info()
        console.log(`Good student name is ${this.name}`)
    }
       
}
let obj = new goodStd('hello hi');
obj.info()