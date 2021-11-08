const showbtn = document.querySelector("#showbutton");
const outputEl = document.querySelector("#output");

const url ="https://randomuser.me/api/?results=10";

showbtn.addEventListener("click",()=>{

    fetch(url)
    .then(response => response.json())
    .then(json =>{
        console.log(json);
        
            json.results.map(array =>{
                if(array.dob.age < 45)
                {
                    outputEl.innerHTML +=`<h1 style="color:${array.dob.age<45 ?'green':'red'}">${array.name.first}</h1>
                    <p>${array.dob.age}`;
                }
                else{
                    outputEl.innerHTML+=`<p> ${array.name.first}</p>`
                }
            })
        
    })


});