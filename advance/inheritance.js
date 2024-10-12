// class students{
//     constructor(){
//         console.log('this is constructor method')
//     }

// }

// class goodStd extends students{

// }
// let obj = new goodStd();


class students{
    constructor(){
        console.log('this is constructor method of students')
    }

}

class goodStd extends students{
    constructor(){
        super();
        console.log('this is constructor method of goodStd')
    }
}
let obj = new goodStd();