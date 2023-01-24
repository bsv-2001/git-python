class item{
    constructor(height,weight){
        this.height=height
        this.weight=weight
    }
}

let _item = new item()
val=1
val2=2
val3=3
let log=(x)=>console.log(x);
let x={val,val2,val3}
module.exports.log=log
module.exports.itemClass=item
console.log(module)