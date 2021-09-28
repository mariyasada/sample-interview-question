// Here' an API. It will give an error. Write a web app, call this API and read the error message. 
// Show user the error message.

const url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=sada mariya";
const url1= "https:/reqres.in/api/unknown/23";

const showbtn = document.querySelector("#showbutton");
const outputEl = document.querySelector("#output");

showbtn.addEventListener("click",()=>{
 fetch(url1)
 .then(response => {

     if (!response.ok){
       throw console.error("something wrong with happened");
       
     }
     return response.json();
 })
 .then(json => console.log(json))
 .catch(error=>{
     outputEl.innerText= error + " try again later";
 })


});

