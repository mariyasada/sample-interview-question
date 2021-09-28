// Create a web app where I can input a text. Now, create three buttons: red, green, blue. Clicking on the button should change the text color.

const input = document.querySelector("#inputtext");
const redbtn = document.querySelector("#red");
const greenbtn = document.querySelector("#green");
const bluebtn = document.querySelector("#blue");
const outputEl = document.querySelector("#output");



redbtn.addEventListener("click",()=>{
     console.log("red");
     input.style.color ="red";
     outputEl.innerText = input.value;
     outputEl.style.color="red";

});

bluebtn.addEventListener("click",()=>{
    console.log("blue");
    input.style.color ="blue";
    outputEl.innerText = input.value;
    outputEl.style.color="blue";

});
greenbtn.addEventListener("click",()=>{
    console.log("green");
    input.style.color ="green";
    outputEl.innerText = input.value;
    outputEl.style.color="green";

});