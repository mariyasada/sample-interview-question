//create a app with three inputs.enter a value in two inputs and in third input enter a operator like +,- etc and perform operation based on that input.

const inputs= document.querySelectorAll(".inputnumber");
const inputoperator = document.querySelector(".operator");
const outputEl = document.querySelector("#output");
const inputList =["+","-","*","/"];

inputoperator.addEventListener("input",() => {
   var operator = inputoperator.value;
  /// for in loop is used for object
    //  if(inputList.includes(operator))
    // {
        console.log("hiii");
            switch (operator) 
            {
                case "+" :
                    const sumofnumbers = Number(inputs[0].value) + Number(inputs[1].value);
                    outputEl.innerText = "sum of two number is  " + sumofnumbers;
                    // return sumofnumbers;
                    break;

                case "-":
                    const subtractionofnumbers = Number(inputs[0].value) - Number(inputs[1].value);
                    outputEl.innerText = "subtraction of two number is  " + subtractionofnumbers;
                    break;

                case "*":
                    const multiplicationofnumbers = Number(inputs[0].value) * Number(inputs[1].value);
                    outputEl.innerText = "multiplication of two number is  " + multiplicationofnumbers;
                    break;

                case "/":
                    const divisionofnumbers = Number(inputs[0].value) / Number(inputs[1].value);
                    outputEl.innerText = "division of two number is  " + divisionofnumbers;
                    break;
            
                default:
                    outputEl.innerText = "operator not present in list";
                    break;
            // }
        
    }

});