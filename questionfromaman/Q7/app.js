// Create a web app, which you have to create two btns one is start, second is stop, and input text on clicking of start btn the text color should change in every 1 sec and on clicking stop it should stop at a particular color.
const inputText = document.querySelector("#input-text");
const btnStart = document.querySelector("#btn-start");
const btnStop = document.querySelector("#btn-stop");
var color =["red","blue","black","pink"];

btnStart.addEventListener("click",()=>{
   
    // var value = inputText.value;
    console.log("clicked");
    setInterval(() => {
        for(let i=0;i< color.length;i++)
        {
        inputText.style.color = `${color[i]}`;
        }

    }, 10);

});