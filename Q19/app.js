const showbtn = document.querySelector("#showbutton");
const outputEl = document.querySelector("#output");

const url ="https://randomuser.me/api/?results=10";

showbtn.addEventListener("click",()=>{

    console.log("clicked");
    fetch(url)
    .then(response => response.json())
        // if(!response.ok)
        // {
        //     throw response.error.message;
        // }
        // else{
        //     return response.json();
        // }
    .then(json => {
        console.log(json);
        // var version = json.info.version;
        // console.log(version);
        json.results.map(array =>{
            
                // outputEl.innerHTML +=`<p> ${array.email} and ${array.name.title} ${array.name.first} </p>`;   
                if(array.dob.age > 45)
                {
                    outputEl.innerHTML += `<h1 style = "color:'red'"> ${array.name.first}</h1>`;
                    outputEl.style.color ="red";
                }

            
        })
    })
});