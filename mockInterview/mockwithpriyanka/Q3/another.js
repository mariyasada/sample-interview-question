//  i am trying to solved the question3 without using slice method.
const inputText = document.querySelector("#input-text");
const btnGreet = document.querySelector("#btn-greet");
const outputEl = document.querySelector("#output");

btnGreet.addEventListener("click",()=>{
 var inputValue = inputText.value;
//    calling a function 

// var inputString =upperCaseCharacter(inputValue);

for(let i=0; i < inputValue.length;i++)
{
    if(inputValue[i]===inputValue[0])
    {
        var inputFirstLetter = inputValue[i].toUpperCase();
    }
    else
    { 
        var allString = inputValue.substr(1);
        
    }

    var CompleteString = inputFirstLetter + allString;
    
}
outputEl.innerText = `hello! good Afternoon ${CompleteString}`;

});

function upperCaseCharacter(str)
{
    var pieces= str.split('');
    for(let i=0; i< pieces.length;i++)
    {
        var firstLetter = pieces[i].charAt(0).toUpperCase();
        pieces[i] = firstLetter + pieces[i].substr(1);
    }
    return pieces.join('');
}