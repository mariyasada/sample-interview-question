// Create a web app, which on the click of a button fetches and show profile photo of your github profile and all your repositories in ordered list.

const btnFetch = document.querySelector("#btn-fetch");
const outputEl= document.querySelector("#output");
const repoList = document.querySelector("#repo-list");
const url="https://api.github.com/users/your_username";
const url1="https://api.github.com/users/mariyasada";

btnFetch.addEventListener("click",()=>{

    fetch(url1)
    .then(response => response.json())
    .then (json => 
        {
            console.log(json);
            outputEl.innerHTML = `<img src ="${json.avatar_url}"/>`;
            // repoList.innerHTML +=`<p> hello <a href="${json.repos_url}">all repo</a></p>`;  
            repoList.innerHTML=`<a href ="${json.html_url}"> Name: ${json.name}</a>`;  
        })
});