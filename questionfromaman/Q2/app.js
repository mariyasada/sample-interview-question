// Create a counter with two buttons + and -. On clicking these buttons the number should increment and decrement respectively from the given value.
//  Show error when you give any input other than number.

const inputNumber = document.querySelector("#input-number");
const btnIncrement = document.querySelector("#btn-Increment");
const btnDecrement = document.querySelector("#btn-decrement");
const outputEl = document.querySelector("#output");
// var counter = 0;
// var counterValue = inputNumber.value;

inputNumber.addEventListener("input",()=>{
    if(inputNumber.type!=="number")
    {
        outputEl.innerText =" input must be a number";
        inputNumber.type="number";
    }

});
btnIncrement.addEventListener("click",()=>{
  console.log("clicked"); 
//    counter = counter + 1;
    var counterValue = inputNumber.value;
    counterValue = Number(counterValue) + 1;
    console.log(counterValue);
    inputNumber.value = counterValue;
});
btnDecrement.addEventListener("click",()=>{

    // counter = counter - 1;
    var counterValue = inputNumber.value;
    counterValue = Number(counterValue) - 1;
    inputNumber.value = counterValue;
});

