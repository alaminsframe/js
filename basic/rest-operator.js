
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



function sum(fname,lname, ...nums){

    sum = 0;
    for(i in nums){
        sum += nums[i];
    }
    console.log(`${fname} ${lname}`)
    console.log(sum)
}

sum('hello','hi',1,32,4,6,7,44,10,26)