
getUser(1,(data)=>{
    console.log(data)
    getRepo(1,(data)=>{
        console.log(data)
    })
        getCommit('repo1',storeCommit)
})