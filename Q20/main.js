const userName = document.querySelector("#name");
const password = document.querySelector("#password");
const display = document.querySelector("#display");
const checkBTn = document.querySelector("#check");



checkBTn.addEventListener("click",() => {
    // so the problem is a scope
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