const input = document.querySelector("#inputtext");
const logbtn = document.querySelector("#log");
const warnbtn = document.querySelector("#warn");
const errorbtn = document.querySelector("#error");
const outputEl = document.querySelector("#output");

logbtn.addEventListener("click",()=>{

    outputEl.innerText = input.value;
    outputEl.style.color ="black";
});
errorbtn.addEventListener("click",()=>{

    outputEl.innerText = input.value;
    outputEl.style.color ="red";
});
warnbtn.addEventListener("click",()=>{

    outputEl.innerText = input.value;
    outputEl.style.color ="orange";
});

//  another example
const userName = document.querySelector("#name");
const password = document.querySelector("#password");
const display = document.querySelector("#display");
const checkBTn = document.querySelector("#check");

checkBTn.addEventListener("click",() => {

    const valueOfPassword = password.value;
    const valueOfName = userName.value;

    console.log("HIII");
    if(valueOfPassword.includes(valueOfName))
    {
             display.innerText ="password should not be contain your name";
    }
    else
    {
        display.innerText ="everything is Ok";
    }
});