'use strict'

var olA1 = document.getElementsByName('ol');


var taskArr = [];

function Const(task, date){
    this.task= task;
    this.date= date;
     taskArr.push(this);
}




function renderd(){
for(var i = 0; i< taskArr.length; i++){
    var liA1= document.createElement('li');
    olA1.appendChild(liA1);
    liA1.textContent= taskArr[i].task
}
}
var formAA = document.getElementById("form1");


formAA.addEventListener('submit', value)
event.preventDefault();

function value(e)
{


}

