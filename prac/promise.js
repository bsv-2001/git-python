let promsie = new Promise((resolve,reject)=>{
    let x=1;
    let y=1;
    if(x==y)
        resolve(1)
    else
        reject('some error occured')
})

promsie.then((x)=>
    console.log(x)
    ).catch(()=>console.log('error'))