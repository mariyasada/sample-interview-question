// Create a password checker web app.
//  If password is lesser than 10 characters then show an error to user otherwise show success.
//  Someone can ask to make the submit button disabled. Some can ask to make the input field green or red depending on input.

const inputText = document.querySelector("#input-Text");
const outputEl = document.querySelector("#output");

inputText.addEventListener("input",() => {
    var inputValue = inputText.value;
    if(inputValue.length < 10)
    {
        outputEl.innerText ="input length must be greater than 10";
         inputText.style.color ="red";
    }
    else
    {
        outputEl.innerText ="all good";
        inputText.style.color ="green";
    }
})