const inputText = document.querySelector("#input-text");
const plusTwo = document.querySelector("#plus-two");
const minusTwo = document.querySelector("#minus-two");
const blueBtn = document.querySelector("#btn-blue");
const btnCheck =document.querySelector("#btn-check");
var fontsize =16;
var borderwidth =5;

plusTwo.addEventListener("click",()=>{
    // var inputValue = inputText.value;
    borderwidth +=2;
    fontsize = fontsize +2;
    inputText.style.fontSize = fontsize + 'px';
    inputText.style.borderColor ="red";
    inputText.style.borderWidth = borderwidth + "px";
    console.log( inputText.style.borderWidth);
    // inputText.style.border = "solid 10px red";
    console.log( inputText.style.fontSize);
})

minusTwo.addEventListener("click",()=>{
    // var inputValue = inputText.value;
    borderwidth -=2;
    fontsize = fontsize - 2;
    inputText.style.fontSize = fontsize + 'px';
    inputText.style.borderColor ="green";
    inputText.style.borderWidth =  borderwidth +"px";
    console.log( inputText.style.borderWidth);
    console.log( inputText.style.fontSize);
})
blueBtn.addEventListener("click",()=>{
    
    document.body.style.backgroundColor ="blue";
    inputText.style.color="blue";
})

btnCheck.addEventListener("click",()=>{
    var inputValue= inputText.value;
    if(inputValue.length %3===0)
    {
        document.body.style.backgroundColor ="red";
        blueBtn.disabled= true;
    }
    else
    {
        document.body.style.backgroundColor ="yellow";
        blueBtn.disabled= false;
    }
})
