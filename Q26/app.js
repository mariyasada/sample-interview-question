const btnZNMD = document.querySelector("#btn-znmd");
const btnYHJD = document.querySelector("#btn-yjhd");
const outputEl=document.querySelector("#output");

const url ="https://mock-practice.prakhar10v.repl.co/bollywood?name=";

btnYHJD.addEventListener("click",()=> {

    var btnValue = btnYHJD.innerText;
    console.log(btnValue);
    callFilmValue(btnValue);
});

btnZNMD.addEventListener("click",()=> {

    var btnValue = btnZNMD.innerText;
    console.log(btnValue);
    callFilmValue(btnValue);
});

function callFilmValue(filmname)
{
    fetch(url + filmname)
    .then(response => response.json())
    .then(json => 
        {
            console.log(json)
            outputEl.innerText= json.message;
        })
}