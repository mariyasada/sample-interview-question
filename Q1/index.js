// Create a web app which would take two inputs. It would also have 4 buttons: +, -, x /. 
// Based on the button clicked perform  the operation on the two inputs. 
// You can do this in React or vanillaJS based on your choice. Your time starts now.

const inputs= document.querySelectorAll(".inputnumbers");
const plusbtn = document.querySelector("#plus");
const minusbtn = document.querySelector("#minus");
const multibtn = document.querySelector("#multi");
const divisionbtn = document.querySelector("#division");
const outputEl = document.querySelector("#output");


plusbtn.addEventListener("click",() => {

    const sumoftwonumbers = (Number(inputs[0].value)) + (Number(inputs[1].value));
    outputEl.innerText = "sum of two number is "+ sumoftwonumbers ;

});
minusbtn.addEventListener("click",() => {

    const subtractionoftwonumbers = (Number(inputs[0].value)) - (Number(inputs[1].value));
    outputEl.innerText = "subtraction of two number is "+ subtractionoftwonumbers ;

});
multibtn.addEventListener("click",() => {

    const productoftwonumbers = (Number(inputs[0].value)) * (Number(inputs[1].value));
    outputEl.innerText = "multiplication of two number is "+ productoftwonumbers ;

});

divisionbtn.addEventListener("click",() => {

      console.log("clicked");
    const divisionoftwonumbers = (Number(inputs[0].value)) / (Number(inputs[1].value));
    outputEl.innerText = "division of two number is "+ divisionoftwonumbers ;

});

