// check profit or loss 
const inputs = document.querySelectorAll(".input-text");
const btnCheck = document.querySelector("#check");
const outputEl = document.querySelector("#output");

btnCheck.addEventListener("click",()=>{
    var cp = Number(inputs[0].value);
    var sp= Number(inputs[1].value);

    if(cp<sp)
    {
        outputEl.innerText ="profit";
    }
    else if(cp===sp)
    {
        outputEl.innerText ="no gain";
    }
    else{
        outputEl.innerText ="loss";
    }
})