let a = [2,43,45]
let itr = a[Symbol.iterator]();
let result = itr.next()
// console.log(itr.next());
// console.log(itr.next().value);
// console.log(itr.next().done);

while(!result.done){
    console.log(result.value)
    result = itr.next()
}

