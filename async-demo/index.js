let username = undefined
getUser(1,(res)=>{
    getRepo(res.name, (result)=>{
        console.log(res.name , result);
    })
})

function getUser(id,callback){
    console.log('fetching user from db');
    setTimeout(()=>{
        callback({ id : id , name : 'sathya' })
    },2000)
}

function getRepo(username , callback){
    console.log(`fetching repos for user ${username}`);
    setTimeout(()=>{
        callback(['repo1' , 'repo2' , 'repo3'])
    },2000)
}