// Create a web app where I can input a text. Now create two buttons + and -. On clicking + increase the fontSize by 2px and vice versa.

const input = document.querySelector("#inputtext");
const plusbtn = document.querySelector("#plus");
const minusbtn = document.querySelector("#minus");
const display= document.querySelector("#display");


var sizeoffont= parseFloat(window.getComputedStyle(input).getPropertyValue('font-size'));
    // console.log(sizeoffont);


plusbtn.addEventListener("click",()=>{
    // take a fontsize of document using getccomputed style
    // var sizeoffont= parseFloat(window.getComputedStyle(input).getPropertyValue('font-size'));
    // console.log(sizeoffont);
    console.log("clicked plus");
    input.style.fontSize = (sizeoffont + 2) + 'px';
    console.log(input.style.fontSize);
    display.innerText = input.value;
    display.style.fontSize = (sizeoffont + 2) + 'px';

});

minusbtn.addEventListener("click",()=>{

    // var sizeoffont= parseFloat(window.getComputedStyle(input).getPropertyValue('font-size'));
    // console.log(sizeoffont);
    console.log("clicked minus");
    input.style.fontSize = (sizeoffont - 2) + 'px';
    console.log(input.style.fontSize);

});