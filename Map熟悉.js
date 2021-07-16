function fn(){
    var map = new Map()
    var arr = [2,11,15,7]
    var target = 9
    arr.forEach((item,index)=>{
        var middle = target - item
        if(map.has(middle)){
            console.log([map.get(middle),index]);
            // return [map.get(middle),index]
        }
        map.set(item,index)
    })
}
console.log(fn());


