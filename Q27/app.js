const inputFerenhit = document.querySelector("#input-ferenhit");
const inputCelcius = document.querySelector("#input-celcius");
const btnConvert = document.querySelector("#btn-convert");

btnConvert.addEventListener("click",()=>{
    var inputValue = inputFerenhit.value;
 var ferenhitToCelcius = (inputValue- 32)* (5/9);
//  console.log(ferenhitToCelcius);
inputCelcius.value=ferenhitToCelcius;

});
