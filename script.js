let showDigit=document.getElementById('digits');
let digitVal=document.querySelectorAll('.btns');
let operator=document.querySelectorAll('.operator');
let result=document.getElementById('result');

let operand1=0;
let operand2=0;
let isNew=false;
let operation="";

digitVal.forEach((data)=>{
    data.addEventListener('click',takeDigit);
})

operator.forEach((ele)=>{
    ele.addEventListener('click',takeOperator);
})
 
result.addEventListener("click",getResult);

function getResult(){
    isNew=true;
    operand2=parseInt(showDigit.innerText);
    if(operation=="+"){
        showDigit.innerText=(operand1+operand2);
    }
    if(operation=="-"){
        showDigit.innerText=(operand1operand2);
    }
    if(operation=="*"){
        showDigit.innerText=(operand1*operand2);
    }
    if(operation=="/"){
        showDigit.innerText=(operand1/operand2);
    }
    if(operation=="%"){
        showDigit.innerText=(operand1%operand2);
    }
    
}

function takeDigit(e){
    if(showDigit.innerText==0)
    showDigit.innerText="";
if(isNew)
    showDigit.innerText=""
    // console.log(e.target);
    // console.log(e.target.innerText);
    showDigit.innerText+=e.target.innerText;
}

function takeOperator(e){
    operand1=parseInt(showDigit.innerText);
    operation=e.target.innerText;
    showDigit.innerText="";
    // console.log(showDigit.innerText);
}


