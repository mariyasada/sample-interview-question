const btnFetch = document.querySelector("#btn-fetch");
const outputEl = document.querySelector("#output");
const url="https://jsonplaceholder.typicode.com/todos";


btnFetch.addEventListener("click",()=>{
    fetch(url)
    .then(response => response.json())
    .then(json=> 
        {
            
            console.log(json);
             json.map(json => { 
                outputEl.innerHTML += `<ul><li>${json.title} </li> </ul>` ;              
             })

        })
})