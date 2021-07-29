// 1.计算数组中的元素的总和
// var arr = [1,2,3,4]
// var sum = arr.reduce((preValue,currentValue) => preValue + currentValue)
// console.log(sum);
// 2.计算数组对象中的元素总和，必须给一个初始值
// var arr = [{x:1},{x:2},{x:3}]
// var sum = arr.reduce((preValue,currentValue) => preValue + currentValue.x,0)
// console.log(sum);
// 3.可实现数组的去重
// var arr = [1,2,2,3,6,6,7,8,4,4]
// var newArr = arr.reduce((preValue,currentValue) =>{
//     if(preValue.indexOf(currentValue) === -1){
//         preValue.push(currentValue)
//     }
//     return preValue
// },[])
// console.log(newArr);
// 4.计算数组中每个元素出现的次数,并找出出现次数最多的元素值
var arr = [1,2,2,2,3,6,6,7,8,4,4,4]
var max = -1
var max_key =''
var count = arr.reduce((preValue,currentValue) => {
    if(currentValue in preValue){
        preValue[currentValue]++
    }
    else{
        preValue[currentValue]=1
    }
    return preValue
},{})
for(var key in count){
    if(count[key]>max){
        max=count[key]
        max_key=key
    }
}
console.log('出现的最多的次数',max);
console.log('出现最多次数的元素值',max_key);