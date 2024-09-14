// const hello = [1,2,3,4,5,6,7];
// //console.log(hello);
// console.log(hello.filter( (item) => item <5));

// const newHello =[];

// hello.forEach( (item)=> {
//     if(item > 3){
//         newHello.push(item);
//     }
// });
// console.log(newHello)
// console.log(hello)


const hello = [1,2,3,4,5,6,7];
const newhello = hello.map( (item) => item *10).map( (item)=> item +5).filter((item)=> item>30);

console.log(newhello)
