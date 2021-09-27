//Create a web app where I can input a text.
//  Now, create three buttons h1, h2, h3. When I click on any of the button, the text should become h1, h2, or h3.

const input = document.querySelector("#inputtext");
const makeHOne = document.querySelector("#makeh1");
const makeHtwo = document.querySelector("#makeh2");
const makeHthree = document.querySelector("#makeh3");
const outputEl = document.querySelector("#output");
const displayheaders = document.querySelectorAll(".displayText")

// first i am used display property but then thought that we don't have content in h1 then i am using  innertext 

makeHOne.addEventListener("click",()=>{

    console.log("clicked1");
    displayheaders[0].innerText = input.value;
    displayheaders[1].innerText ="";
    displayheaders[2].innerText ="";
    
});

makeHtwo.addEventListener("click",()=>{

    console.log("clicked2");
    displayheaders[1].innerText = input.value;
    displayheaders[0].innerText ="";
    displayheaders[2].innerText ="";
    
});

makeHthree.addEventListener("click",()=>{

    console.log("clicked3");
    displayheaders[2].innerText = input.value;
    displayheaders[0].innerText ="";
    displayheaders[1].innerText ="";
    
});