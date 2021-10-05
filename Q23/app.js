const inputtext = document.querySelector("#input-text");
const checkBtn = document.querySelector("#check-btn");
const outputEl = document.querySelector("#output");
const inputNumber = document.querySelector("#input-number");
const checkEvenOddBtn = document.querySelector("#check-evenodd");

checkBtn.addEventListener("click",()=>{
 var inputValue = inputtext.value;
 console.log("clicked");
 var listofcharacter = inputValue.split("");
//    console.log(listofcharacter);
var reversecharacter = listofcharacter.reverse();
var reverseInputString = reversecharacter.join("");
console.log(reverseInputString);
if(inputValue === reverseInputString)
{
    outputEl.innerText = "The entered text or string is palindrome";
    outputEl.style.color ="green";
}
else{
    outputEl.innerText = "The entered text or string is  not palindrome";
    outputEl.style.color ="red";   
}
});

checkEvenOddBtn.addEventListener("click",()=>{
    var input = Number(inputNumber.value);
    console.log(typeof(input));
    if(input % 2 === 0)
    {
        outputEl.innerText ="number is even";
        outputEl.style.color ="green";
        
    }
    else{
        outputEl.innerText ="number is odd";
        outputEl.style.color ="blue";
    }
});