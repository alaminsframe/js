function randomUser(){
    fetch(`https://randomuser.me/api`)
    .then( (raw) => {
        return raw.json();
    })
    .then( (data) => {
        console.log(data);
        
    })
}
randomUser()