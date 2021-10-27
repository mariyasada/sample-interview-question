// Create a counter app which consist of counter value with two buttons + and -. On clicking these buttons the number should increment and decrement respectively. Add on make '-' button disable while counter value is 0,
//  only enable when the counter value is greater than 0 and again disable '-' button when counter value becomes 0.

const inputText =document.querySelector("#input-text");
const btnIncrement =document.querySelector("#btn-Increment");
const btnDecrement = document.querySelector("#btn-Decrement");


inputText.addEventListener("input",()=>{
 var counterValue = Number(inputText.value);
 if(counterValue === 0)
 {
    btnDecrement.disabled=true;   
 }
 else
 {
    btnDecrement.disabled=false;
 }
});


btnIncrement.addEventListener("click",()=>{
    var counterValue = inputText.value;
    counterValue = Number(counterValue)+1;
    inputText.value = counterValue;
    if(counterValue === 0)
    {
        btnDecrement.disabled=true;
    }
    else{
        btnDecrement.disabled=false;   
    }
    
});

btnDecrement.addEventListener("click",()=>{
    var counterValue = inputText.value;
    
    counterValue = Number(counterValue) - 1;
    inputText.value = counterValue;
    if(counterValue === 0)
    {
        btnDecrement.disabled=true;
    }
    else{
        btnDecrement.disabled=false;   
    }
})