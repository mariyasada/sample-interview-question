 const outputEl= document.querySelector("#output");
 const url="https://reqres.in/api/users?page=2";
 const btnFetch= document.querySelector("#btn-fetch");


 btnFetch.addEventListener("click",()=>{

    fetch(url)
    .then(response=> response.json())
    .then(json => 
        {
            console.log(json)
            json.data.map(array=>{
                outputEl.innerHTML +=`<img src="${array.avatar}"></img>  <span> ${array.first_name} ${array.email}</span>`;
            })
        })
 })
