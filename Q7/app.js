// Create a web app with a button loded. Show a text loading... on a web app. However, hide it if I click on the button loaded.

const textload= document.querySelector("#text");
const loadBtn= document.querySelector("#loaded");

loadBtn.addEventListener("click",()=>{

    textload.style.display ="none";
});