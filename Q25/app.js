const inputText= document.querySelector("#input-text");
const btnCheck = document.querySelector("#btn-check");
const outputEl =document.querySelector("#output");

btnCheck.addEventListener("click",()=>{

 var inputValue = inputText.value;


switch (inputValue) {
    case "tanvi":
        outputEl.innerText =`she is the best CEO ever`;
        break;

    case "tanay":
        outputEl.innerText =`He is our FUNNY mentor`;
        break;

    case "swapnil":
        outputEl.innerText =`He helps us Conquer jobs`;
        break;

    case "akanksha":
        outputEl.innerText =`she is cheerful interviewer`;
        break;

    default:
        outputEl.innerText =`I can't tell you good things about you`;
        break;
}
});