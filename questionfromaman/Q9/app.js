const inputText = document.querySelector("#input-text");
const btnCheck = document.querySelector("#btn-check");
const outputEl = document.querySelector("#output");

btnCheck.addEventListener("click",()=>{
    var inputValue = Number(inputText.value);
    var squareOfInput = inputValue * inputValue;
    var lastDigitOfSquare = Number(squareOfInput % 10);
    console.log(lastDigitOfSquare);
    if( inputValue === lastDigitOfSquare)
    {
        outputEl.innerText =" number is automorphic";
    }
    else{
        outputEl.innerText =" number is  not automorphic";
    }
})
