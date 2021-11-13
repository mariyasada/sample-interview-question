const btnToggle= document.querySelector("#btn-toggle");

btnToggle.addEventListener("click",()=>{

    if(document.body.style.backgroundColor === "grey")
    {
    document.body.style.backgroundColor ="white";
    btnToggle.innerText ="white";
    btnToggle.style.backgroundColor ="red";
}
else
{
    document.body.style.backgroundColor ="grey";
    btnToggle.innerText ="grey";
    btnToggle.style.backgroundColor ="blue";
}
})