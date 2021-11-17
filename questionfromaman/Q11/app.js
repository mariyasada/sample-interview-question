const inputText = document.querySelector("#input-text");
const checkBtn = document.querySelector("#btn-check");
const outputEl = document.querySelector("#output");
const displayText = document.querySelector("#display-text");

// var text = "hello my name is mariya sada i am from gujarat.";

checkBtn.addEventListener("click",()=>{
    var inputValue = inputText.value;
    // displayText.innerText = inputValue;
    var listOfWords = inputValue.split(" "); // without space in split bracket it takes one character after giving some space it takes one word
    console.log(listOfWords);
    outputEl.innerText = listOfWords.length;
})