const inputs = document.querySelectorAll(".input-text");
const inputOperator = document.querySelector("#input-operator");
const displayOutput =document.querySelector(".output-display");

inputOperator.addEventListener("input",()=>{
var inputOperatorValue = inputOperator.value;
switch (inputOperatorValue) {
    case "+":
        displayOutput.value = Number(inputs[0].value) + Number(inputs[1].value);
        break;

        case "-":
        displayOutput.value = Number(inputs[0].value) - Number(inputs[1].value);
        break;

        case "/":
        displayOutput.value = Number(inputs[0].value) / Number(inputs[1].value);
        break;

        case "*":
        displayOutput.value = Number(inputs[0].value) * Number(inputs[1].value);
        break;

        // case "^":
        // displayOutput.value = Number(inputs[0].value) ^ Number(inputs[1].value);
        // break;

    default:
        displayOutput.value ="nothing to show";
        break;
}

});