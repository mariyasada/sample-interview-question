const inputs = document.querySelectorAll(".input-number");
const inputOperator = document.querySelector("#input-operator");
const outputEl= document.querySelector("#output");

inputOperator.addEventListener("input",()=>{
    var inputValue = inputOperator.value;
    switch (inputValue) {
        case "+":
            var result = Number(inputs[0].value) + Number (inputs[1].value);
            outputEl.innerText = `sum of two number is ${result}`;
            break;

            case "-":
            var result = Number(inputs[0].value) - Number (inputs[1].value);
            outputEl.innerText = `subtraction of two number is ${result}`;
            break;

            case "*":
            var result = Number(inputs[0].value) * Number (inputs[1].value);
            outputEl.innerText = `multiplication of two number is ${result}`;
            break;

            case "/":
            var result = Number(inputs[0].value) / Number (inputs[1].value);
            outputEl.innerText = `division of two number is ${result}`;
            break;
    
        default:
            outputEl.innerText = `you are entering a wrong operator.`;
            break;
    }
})