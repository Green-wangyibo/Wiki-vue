function deepClone(target,map=new Map()){
    if(target=='object'&&target!=null){
        var cache = map.get(target)
        if(cache){
            return cache
        }
        var arr = Array.isArray(target)
        var result = arr ? [] : {}
        map.set(target,result)
        if(arr){
            // 如果是数组则进行forEach遍历
            target.forEach((item,index)=>{
                result[index] = deepClone(target[index],map)
            })
        }
        else{
            // 如果是对象，则得到所有的键，然后对键进行forEach遍历
            Object.keys(target).forEach(key=>{
                result[key] = deepClone(target[key],map)
            })
        }
        // for(let key in target){
        //     // 检测该属性是否为对象本身的属性(不能拷贝原型对象的属性)
        //     if(target.hasOwnProperty(key)){
        //         result[key] = deepClone(target[key])
        //     }
        // }
        return result
    }
    return target
}
var obj = {
    a:1,
    b:['王一博','bently','威廉'],
    c:{name:'大豆豆'},
    say:function(){console.log('要开心呀');}
}
// deepClone(obj)
console.log(deepClone(obj));
