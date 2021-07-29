var arr = [1,4,5,6,1,4,2,3,4,6]
var newArr = arr.filter((item,index) => {
    return arr.indexOf(item)===index
})
console.log(newArr);
