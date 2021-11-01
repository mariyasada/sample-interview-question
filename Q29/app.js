//  create a web app when we click button it display a random words.
const btnDisplay = document.querySelector("#btn-display");
const outputEl= document.querySelector("#output");
const arr =["bhaad me jao","I hate you","don't like anything", "computer","Keybord"];

btnDisplay.addEventListener("click",()=>{

    console.log("clicked");
    outputEl.innerText = arr[Math.floor(Math.random() * arr.length)];
})