var a = [1,4,5,7]; 
var  b = [2,3,6,8]; 
function mergeArr(arr1,arr2){
    var a1 = 0;
   var b1 = 0;
    var newArr = [];
    while(a1<arr1.length&&b1<arr2.length){
        if(arr1[a1]<=arr2[b1]){
            newArr.push(arr1.slice(a1,a1+1)[0])
            a1++;
        }
        else{
            newArr.push(arr2.slice(b1,b1+1)[0])
            b1++;
        }
    }
    while(a1<arr1.length){
        newArr.push(arr1.slice(a1,a1+1)[0])
        a1++;
    }
    while(b1<arr2.length){
        newArr.push(arr2.slice(b1,b1+1)[0])
        b1++;
    }
    return newArr
}
console.log(mergeArr(a,b));
