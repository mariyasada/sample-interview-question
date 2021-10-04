
const twoPlusBtn = document.querySelector("#two");
const twoMinusBtn = document.querySelector("#minustwo");
const input = document.querySelector("#inputtext");
const plusFive = document.querySelector("#plusfive");
var fontsize=16;

twoPlusBtn.addEventListener("click",()=>{
    console.log("clicked");
    input.style.fontSize = (fontsize + 2) + 'px';
    console.log(input.style.fontSize);
    input.style.color ="green";

});
twoMinusBtn.addEventListener("click",()=>{
    input.style.fontSize = (fontsize-2) +'px';
    console.log(input.style.fontSize);
    input.style.color ="red";
});

plusFive.addEventListener("click",()=>{
    input.style.fontSize = (fontsize + 5) + 'px';
    console.log(input.style.fontSize);
})