const  btnLeft = document.querySelector("#btn-left");
const btnCenter = document.querySelector("#btn-center");
const btnRight = document.querySelector("#btn-right");
const inputText = document.querySelector("#input-text");

btnLeft.addEventListener("click",()=>{
    inputText.style.textAlign = "left";
    inputText.style.fontFamily ="Hind,sans-serif";
    console.log("click");
})
btnCenter.addEventListener("click",()=>{
    inputText.style.textAlign = "center";
    inputText.style.fontFamily ="Lora, serif";
    console.log("click");
})
btnRight.addEventListener("click",()=>{
    inputText.style.textAlign = "right";
    inputText.style.fontFamily ="Open Sans Condensed, sans-serif";
    console.log("click");
})

