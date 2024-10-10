

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



let fname = 'First';
let lname = 'LastName';

let obj = {
    [fname+'Name']: 'hello',
    [lname]: 'hi',
    age: 20
}
console.log(obj)
console.log(obj.FirstName)