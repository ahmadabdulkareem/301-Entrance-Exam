'use strict'



var newArr=[];
function greaterThan(x, y) {
   
    for (let i = 0; i< x.length; i++) {
        if(i =>y){
            newArr.push(i);
        }
        
    }
    var m= newArr.length;
    
    return m ;
}
console.log(newArr.length);
console.log(greaterThan([4,2,3,1], 3));