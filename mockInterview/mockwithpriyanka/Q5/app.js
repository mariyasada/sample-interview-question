const paraText = document.querySelector("#input-paragraph");
const btnAddText = document.querySelector("#btn-textAdd");
const outputEl = document.querySelector("#output"); 

var text ="Lorem ipsum dolor sit amet consectetur adipisicing elit as its text node";
paraText.innerText = text;


btnAddText.addEventListener("click",() => {
    var splitText = text.split(" ");
    console.log(splitText);
    outputEl.innerText = splitText.length;
});