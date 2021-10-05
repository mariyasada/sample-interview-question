 const inputtext = document.querySelector("#input-text");
 const makeH1Btn = document.querySelector("#make-h1");
 const makeH2Btn = document.querySelector("#make-h2");
 const makeH3Btn = document.querySelector("#make-h3");
 const display = document.querySelectorAll(".display");

 makeH1Btn.addEventListener("click",()=>{
 
    display[0].innerText = inputtext.value;
    display[1].innerText ="";
    display[2].innerText="";
    display[0].style.color ="red";

 })
 makeH2Btn.addEventListener("click",()=>{
 
    display[1].innerText = inputtext.value;
    display[0].innerText ="";
    display[2].innerText="";
    display[1].style.color ="green";

 })
 makeH3Btn.addEventListener("click",()=>{
 
    display[2].innerText = inputtext.value;
    display[1].innerText ="";
    display[0].innerText="";
    display[2].style.color ="blue";

 })


