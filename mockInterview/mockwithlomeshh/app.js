const btnCheck = document.querySelector("#Btn-test");
const url="https://unitube-server.herokuapp.com/playlists";
const url1 ="https://jsonplaceholder.typicode.com/dummyUsers";
const outputEl = document.querySelector("#output");

btnCheck.addEventListener("click",()=>{
console.log("clicked");

fetch(url1)
.then(response =>{
    if(response.status === 404)
    {
      outputEl.innerText ="Page not found";
    }
    else if(response.status ===401)
    {
        outputEl.innerText ="Api is not working";
    }
    else{
        return response.json();
    }
})

});