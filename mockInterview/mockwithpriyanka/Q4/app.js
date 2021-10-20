 const btnTest = document.querySelector("#btn-Test");
 const outputEl= document.querySelector("#output");

 const url="https://mystery-api.kushanksriraj.repl.co/get";

 btnTest.addEventListener("click",()=>{

    fetch(url)
    .then(response =>{
        if(response.status===401)
        {
            outputEl.innerText ="you are not logged in";
        }
        else if(response.status===404)
        {
            outputEl.innerText ="page not found";
        }
        else if(response.status ===200)
        {
            outputEl.innerText ="Api is working";
        }
        else {
            return response.json();
        }
    })
 });