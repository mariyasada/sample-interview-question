// Here's an API, it can give two errors. Either 404, or 401. 
// If the error is 404, show the user 'page not found' and if the error is 401, show the user 'you are not logged in'.

const outputEl= document.querySelector("#output");
const showBtn= document.querySelector("#showButton");
const url ="https:/reqres.in/api/unknown/23";

showBtn.addEventListener("click",()=>{
fetch(url)
.then(response =>{
       if(response.status===404)
    {
        outputEl.innerText ="page not Found";
    }
    else if(response.status===401)
    {
        outputEl.innerText="you are not logged in";
    }
    else{
        return response.json();
    }

})
.then(json=>console.log(json))

});