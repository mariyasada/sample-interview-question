// Create a web app, which you have to create two btns one is start, second is stop, and input text on clicking of start btn the text color should change in every 1 sec and on clicking stop it should stop at a particular color.
const inputText = document.querySelector("#input-text");
const btnStart = document.querySelector("#btn-start");
const btnStop = document.querySelector("#btn-stop");
// var color =["red","blue","black","pink"];
var clearVar;


btnStart.addEventListener("click",()=>{
   
    // var value = inputText.value;
    console.log("clicked");
    // inputText.style.color ="red";
     clearVar=setInterval(changeColor,300);
});

function changeColor()
{
    inputText.style.color = inputText.style.color==="yellow"?"red":"yellow";
}
function stopColor()
{
    clearInterval(clearVar);
}

btnStop.addEventListener("click",()=>{
    stopColor();
})