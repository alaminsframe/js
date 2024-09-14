const hello = [1,2,3,4,5,6,7];
//console.log(hello);
console.log(hello.filter( (item) => item >= 3));

const newHello =[];

hello.forEach( (item)=> {
    if(item > 3){
        newHello.push(item);
    }
});
console.log(newHello)
console.log(hello)

