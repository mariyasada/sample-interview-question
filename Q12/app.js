// Create a password checker web app. If password is lesser than 10 characters then show an error to user otherwise show success. 
// Someone can ask to make the submit button disabled. Some can ask to make the input field green or red depending on input.

const password = document.querySelector("#password");
const showBtn = document.querySelector("#showButton");
const outputEl = document.querySelector("#output");

showBtn.disabled =true;

password.addEventListener("input",()=>{
        if(password.value.length < 10){
            outputEl.innerText ="Error!! password must be 10 characters";
            showBtn.disabled =true;
            password.style.backgroundColor ="red";
        }
        else{
            outputEl.innerText ="success!!!";  
            showBtn.disabled=false; 
            password.style.backgroundColor ="green";
        }

});

// checking by clicking button
// showBtn.addEventListener("click",()=>{
//     if(password.value.length < 10){
//         outputEl.innerText ="Error!! password must be 10 characters";
//     }
//     else{
//         outputEl.innerText ="success!!!";   
//     }
// });