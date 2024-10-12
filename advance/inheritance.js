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
//         super.info()
//         console.log(`Good student name is ${this.name}`)
//     }
       
// }
// let obj = new goodStd('hello hi');
// obj.info()



class employee{
    constructor(name, age, salary){
        this.empname = name;
        this.empage = age;
        this.empsalary= salary;
        //console.log('constructor: employee')
    }
    info(){
        console.log(`
        All employee:
        Name: ${this.empname}
        Age: ${this.empage}
        Salary: ${this.empsalary}`)
    }
}
class manager extends employee{
    info(){
        let extra = 50;
        let total = extra + this.empsalary;
        console.log(`
            For Manager:
            Name: ${this.empname}
            Age: ${this.empage}
            Salary: ${total}`)
    }
}

let obj1 = new manager('Rocky', 20, 100);
let obj2 = new employee('Hocky', 22, 80);
obj1.info()
obj2.info()