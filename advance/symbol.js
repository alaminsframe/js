let a = Symbol("hello")
let b = Symbol("hello")
//console.log(a == b) //it's false because all symbols are unique

let user = {
    name: 'hello',
    [a]: 22,
}
user[b] = 33
// console.log( user[b])

console.log( user)