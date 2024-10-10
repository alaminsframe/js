

//##############  Normal  #############

// let fname = 'hello ';
// let lname = 'hi';

// let obj = {
//     firstName: fname,
//     lastName: lname,
// }
// console.log(obj)



//##############  obj literals  #############

// let fname = 'hello ';
// let lname = 'hi';

// let obj = {
//     fname,
//     lname,
// }
// console.log(obj)



//##############  use variable as a property name  #############

// let fname = 'FirstName';
// let lname = 'LastName';

// let obj = {
//     [fname]: 'hello',
//     [lname]: 'hi',
//     age: 20
// }
// console.log(obj)
// console.log(obj.LastName)



// let fname = 'First';
// let lname = 'LastName';

// let obj = {
//     [fname+'Name']: 'hello',
//     [lname]: 'hi',
//     age: 20
// }
// console.log(obj)
// console.log(obj.FirstName)



//##############  obj literals: new function syntax  #############

////////// normal 
// let fname = 'Hello';
// let lname = 'Hi';

// let obj = {
//     fname,
//     lname,
//     fullName: function (){
//         return `${this.fname} ${this.lname}`;
//     },
//     age: 20
// }
// console.log(obj.fullName())


// let fname = 'Hello';
// let lname = 'Hi';

// let obj = {
//     fname,
//     lname,
//     fullName: function (){
//         return `${this.fname} ${this.lname}`;
//     },
//     age: 20
// }
//console.log(obj.fullName())



// let fn = 'hello'
// let ln = 'hi'

// function ad(fn, ln){
//     return {fn, ln}
// }
// console.log( ad(fn, ln))


let fn = 'hello'
let ln = 'hi'

function ad(fn, ln){
    return [fn+'hehe', ln]
}
console.log( ad(fn, ln))