let mv1 = (req,res,next) =>{
    console.log('middleware 1')
    next()
}
let mv2 = (req,res,next) => {
    console.log('middleware 2')
    next()
}
const middleware = {
    mv1,mv2
}
module.exports=middleware