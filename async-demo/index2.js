getUser(1).then(result=>{
    console.log(`user found ${result.name}`)
    return getRepo(result.name)
    })
          .then(result=>console.log(result))
          .catch(err=>console.log(err))

function getUser(id){
    const getUserPromise = new Promise((resolve , reject)=>{
        setTimeout(()=>{
            console.log('fetching user from db');
            resolve({ id : id , name : 'sathya' })
        },2000)
    })
    return getUserPromise   
}

function getRepo(username){
    const getRepoPromise = new Promise((resolve , reject)=>{
        setTimeout(()=>{
            console.log(`fetching repos for user ${username}`);
            resolve(['repo1' , 'repo2' , 'repo3'])
        },2000)
    })
    return getRepoPromise
}