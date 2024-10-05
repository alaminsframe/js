
// function sum(){
//     //console.log(arguments)
//     sum = 0;
//     for(i in arguments){
//         sum += arguments[i];
//     }
//     //console.log(str)
//     console.log(sum)
// }

//sum(1,32,4,6,7)



// function sum(str, ...nums){

//     sum = 0;
//     for(i in nums){
//         sum += nums[i];
//     }
//     console.log(str)
//     console.log(sum)
// }

// sum('hello',1,32,4,6,7)



// function sum(fname,lname, ...nums){

//     sum = 0;
//     for(i in nums){
//         sum += nums[i];
//     }
//     console.log(`${fname} ${lname}`)
//     console.log(sum)
// }

// sum('hello','hi',1,32,4,6,7,44,10,26)



//##############    Spread Operator     #############


// let arr1= [3,4,6,2,6,9]
// let arr2= [30,40,60,20,60,90]
// console.log([...arr1,...arr2])



// let arr1= [3,4,6,2,6,9]
// let arr2= [30,40,60,20,60,90]
// console.log([1,2,...arr1,...arr2,100,200])


let obj1 = {
    fname:'hello',
    lname:'hi'
}
let obj2 = {
    age:20
}
console.log({...obj1,...obj2})


// function sum(fname,lname, ...nums){

//     sum = 0;
//     for(i in nums){
//         sum += nums[i];
//     }
//     console.log(`${fname} ${lname}`)
//     console.log(sum)
// }
//  let a = ['hello','hi',1,32,4,6,7,44,10,26]
// sum(...a)