let displayValue = '';
let is_calc = false;
let display = document.getElementById("display");

function appendNumber(number){
    
    if(is_calc) displayValue = "0";
    is_calc = false;

    if (displayValue[0] === "0"){
        displayValue = number;
    }else{
       displayValue += number;
    }

    if(displayValue === )
    

    

    //if(displayValue =="0" && number =="0"){
    //    displayValue = "0";
    //}else if(displayValue == "0"){
    //    displayValue = number;
    //}else{
    //    displayValue += number;
    //}
    
    updateDisplay();
}


function appendOperator(operator){
    //displayValue += operator;
    //if(displayValue.slice(-1) === "+"){
    //    return;
    //}else if(displayValue.slice(-1) === "-"){
    //    return;
    //}else if(displayValue.slice(-1) === "*"){
    //    return;
    //}else if(displayValue.slice(-1) === "/"){
    //    return;
    //}else{
    //    displayValue += operator;
    //}
    if(is_number_last()){
        displayValue = displayValue.slice(0, -1) + operator;
    }else{
        displayValue += operator;
    }

    if(is_calc) is_calc =false;
    
    updateDisplay();
}

function is_number_last(){
    return["+","-","*","/"].includes(displayValue.slice(-1));
}


function appendDot(){
    
    displayValue += '.';
    updateDisplay();
    
}

function clearDisplay(){
    displayValue = '0';
    is_calc = false;
    updateDisplay();
}

function calculate(){
    try{
        displayValue = eval(displayValue);
        updateDisplay();
    }catch(e){
        displayValue = 'Error';
        updateDisplay();
    }
    if(is_calc) displayValue = "0";
    is_calc = false;
    
    //if(is_number_last()) displayValue = displayValue.slice(0,-1);
    //let temp = new Function("return" );
    //if(temp ==Infinity || Number.isNaN(temp)){
    //    displayValue = "error"
    //}else{
    //    displayValue = temp;
    //    is_calc = true;
   // }

    
     
    //if(is_calc) displayValue = number;
    //is_calc = false;

}

function updateDisplay(){
    document.getElementById('display').value = displayValue;
}




//$(document).ready(function(){
//    $("#plus").click(function(){
//        $(this).prop('disabled',true)
//    });
//});