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


// const hello = [1,2,3,4,5,6,7];
// const newhello = hello.map( (item) => item *10).map( (item)=> item +5).filter((item)=> item>30);

// console.log(newhello)



// const hello = [1,2,3,4];
// const newHello = hello.reduce( (a, v) => a+v , 20);
// console.log(newHello)

const cart = [
    {
        brand: "apple",
        model: "iphone 15",
        price: 590
    },
    {
        brand: 'samsung',
        model: 's 24',
        price: 490
    },
    {
        brand: 'xiaomi',
        model: 'civi 1',
        price: 690
    }
]

console.log( cart.reduce( ( a, item) => a + item.price, 0) )