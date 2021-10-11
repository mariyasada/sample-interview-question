const inputEmail = document.querySelector("#input-email");
const outputEl = document.querySelector("#output");
var sign ="@";

// inputEmail.addEventListener("input",()=>{
//   if(inputEmail.value.includes(sign))
//   {
//       outputEl.innerText ="email is valid";
//   }
//   else
//   {
//       outputEl.innerText ="email is not valid";
//   }

// })
inputEmail.addEventListener("input",()=>{
    var inputString = inputEmail.value;
    for(let i=0; i< inputString.length;i++)
    {
        if(inputString[i] === "@")
        {
            outputEl.innerText ="email is valid";
            break;
        }
        else{
            outputEl.innerText ="email is  not valid";   
        }
    }

});

function plus(pra1,par2) // definition
{

}

plus(3,4); // declaration

