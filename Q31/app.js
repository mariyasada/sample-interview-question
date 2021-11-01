const url="https://otpgenerator.ishanjirety.repl.co/get-otp?name=";

const inputText = document.querySelector("#input-text");
const btnCheck = document.querySelector("#otp-checker");
const outputEl =document.querySelector("#output");
const otpInput = document.querySelector("#input-otp");
const btnValidate = document.querySelector("#validate-otp");

btnCheck.addEventListener("click",()=>{
    var inputValue = inputText.value;
    serverUrl = url + inputValue;
    fetch(serverUrl)
    .then(response => response.json())
    .then(json => {
        console.log(json);
        outputEl.innerText = json.otp;
        
    })
    
})

btnValidate.addEventListener("click",()=>{
    if(outputEl.innerText === otpInput.value)
    {
        outputEl.innerText ="success";
        outputEl.style.color ="green";
    }
    else
    {
        outputEl.innerText ="failure";
        outputEl.style.color ="red";
    }
})