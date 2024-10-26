// function randomUser(){
//     fetch(`https://randomuser.me/api`)
//     .then( (raw) => {
//         return raw.json();
//     })
//     .then( (data) => {
//         console.log(data);
        
//     })
// }
// randomUser()



async function randomUser() {
    let apiUrl = await fetch(`https://randomuser.me/api`);
    let rawData = await apiUrl.json();
    console.log(rawData);
}
randomUser();