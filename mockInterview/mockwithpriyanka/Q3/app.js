const inputText = document.querySelector("#input-text");
const btnGreet = document.querySelector("#btn-greet");
const outputEl = document.querySelector("#output");

btnGreet.addEventListener("click",()=>{
 var inputValue = inputText.value;

//  console.log(inputValue.slice(1));
var inputFirstCharacter = inputValue.slice(1);
var inputLeftString = inputValue[0].toUpperCase();
var resultString =  inputLeftString + inputFirstCharacter;

 outputEl.innerText = `hello! good Afternoon ${resultString}`;

});

