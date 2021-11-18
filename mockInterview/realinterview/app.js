const inputText = document.querySelector("#input-text");
const outputEl = document.querySelector("#output");

inputText.addEventListener("input",()=>{

    var inputValue = inputText.value;

    // var listofCharacter = inputValue.split(" ");
    outputEl.innerText = inputValue.length;
    if(inputValue.length > 10)
    {
        outputEl.style.color="red";
        // outputEl.innerText = inputValue.length;
    }
    else{
        outputEl.style.color="black";
    }


})