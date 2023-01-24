let globalUser, globalRepo, globalCommit

/* getUser(1,(data1)=>{
    console.log(data1)
    getRepo(1,(data2)=>{
        console.log(data2)
        getCommit('repo1',(data3)=>{
            console.log(data3);
        })
    })      
})
 */

getUser(1,storeUser)

function storeUser(data){
    globalUser=data
    getRepo(1,storeRepo)    
}

function storeRepo(data){
    globalRepo=data
    getCommit('repo1',storeCommit)
}

function storeCommit(data){
    globalCommit=data
    console.log(globalUser,globalRepo,globalCommit);  
}


function getUser(id,callback){
    setTimeout(()=>{
        console.log('fetching from database');
        callback({id:id,username:'sathya'})
    },2000)
    console.log('line 14')
}


function getRepo(username, callback){
    setTimeout(()=>{
        console.log('fetching repo from database')
        callback(['repo1','repo2','repo3'])
    },2000)
}


function getCommit(repo,callback){
    setTimeout(()=>{
        console.log('fetching commits from database')
        callback(['abc','def','ghi'])
    },2000)
}  
