for(var i=0; i < 5; i++){
    (function(x){
        setTimeout(()=>{
            console.log(x++);
            
        },1000)
    }(i))
}
console.log('全局',i);