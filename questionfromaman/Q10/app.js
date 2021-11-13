const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const outputEl= document.querySelector("#output");
const btncheck = document.querySelector("#check");

btncheck.addEventListener("click",()=>{
    if(input1.value === input2.value)
    {
        outputEl.innerText ="password matched";
    }
    else
    {
        outputEl.innerText ="password mis-matched";
    }
})