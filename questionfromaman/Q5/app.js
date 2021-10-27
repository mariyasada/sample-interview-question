// Create a web app to take text input from the user and show the number of vowels and consonants. (spaces should not be counted)
const inputText = document.querySelector("#input-text");
const outputEl = document.querySelector("#output");

const vowels =["a","i","o","e","u"];

inputText.addEventListener("input",()=>{
    var countVowels =0;
    var countconsonants=0;
   var inputValue = inputText.value;
   var inputValueLowerCase = inputValue.toLowerCase();

   for(let i =0;i < inputValueLowerCase.length;i++)
   {
       if(inputValueLowerCase.includes(vowels[i]))
       {
           countVowels++;
           outputEl.innerText =`vowels are ${countVowels},consonants are ${countconsonants}`;
       }
       else
       {
             countconsonants++;
             outputEl.innerText =`consonants are ${countconsonants},vowels are ${countVowels}`;
       }
    //    outputEl.innerText =`vowels are ${countVowels} and consonants are ${countconsonants}`;
   }
//    outputEl.innerText =`vowels are ${countVowels} and consonants are ${countconsonants}`;

});