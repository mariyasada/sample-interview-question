const inputText = document.querySelector("#input-text");
const btnCheck = document.querySelector("#btn-check");
const outputEl = document.querySelector("#output");

btnCheck.addEventListener("click",()=>{
    var inputValue = inputText.value;
     var squareOfInput = (inputValue * inputValue).toString();
     console.log(squareOfInput);
     var lastDigitofSquare = squareOfInput.slice(1);
     console.log(lastDigitofSquare);
     if(inputValue=== lastDigitofSquare)
     {
         outputEl.innerText = "number is automorphic";
     }
     else{
        outputEl.innerText = "number is not automorphic";
     }
})