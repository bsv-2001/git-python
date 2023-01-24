function Sync(){
console.log('hello');
}

async function Async(){ //try -> resolve catch-> reject
    try{
        const username = await getUser(1)
        const repo = await getRepo(username)
        const commit =await getCommit(repo.username[0])
        console.log(commit); //this line is considered as asynchronous when defined inside an async block
    }
    catch(err){
        console.log(err)
    }
 
}


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

Async()
Sync()