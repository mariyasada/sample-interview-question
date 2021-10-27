// Create a web app where I can input a text. Now, If the number of characters is divisible by 3 the text color should change to red.
const inputText = document.querySelector("#input-text");
const outputEl = document.querySelector("#output");

inputText.addEventListener("input",()=>{
    var inputValue = inputText.value;
    if(inputValue.length % 3===0)
    {
        inputText.style.color ="red";
    }
    else{
        inputText.style.color ="black";
    }
})