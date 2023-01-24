function getUser(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('fetching from users db for user id ',id);
            resolve({username:'sathya'})
        },2000)
    })
}

function getRepo(username){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('fetching from repo db for username ',username);
            resolve({username:['repo1','repo2','repo3']})
        },2000)
    })
}

function getCommit(repo){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('fetching from commit db for repository name' ,repo);
            resolve({ [repo] : ['commit1','commit2']})
        },2000)
    })
}


const p=getUser(1)

p.then(res=>getRepo(res.username))
 .then(res=>getCommit(res.username[0]))
 .then(res=>console.log(res))
 .catch(err=>console.log(err)) //if any one of the promises get rejected this catch block gets executed
