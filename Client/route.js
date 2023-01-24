function load(){
    fetch('http://localhost:3000').then(res=>res.text()
                                                .then(res1=>console.log(res1)))
                                                .catch(err1=>console.log(err1))
                                .catch(err=>console.log(err))
}