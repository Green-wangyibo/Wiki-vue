function sum(arr,target){
    if(arr.length===0) return
    var map = new Map()
    // var idxTarget = []
    // arr.forEach((item,index) => {
    //     var middle = target - item
    //     if(map.has(middle)){
    //        idxTarget = idxTarget.concat(map.get(middle),index)
    //         console.log(idxTarget);
    //     }
    //         map.set(item,index)
    // });
    for(var i = 0;i < arr.length; i++){
        var middle = target - arr[i]
        if(map.has(middle)){
            return [middle,arr[i]]
        }
        map.set(arr[i],i)
    }
}
console.log(sum([2,5,6,8,7],9));
