// Here's an API. Create a web app to call this API with your full name and print the response.
//  This could be extended where we ask you to do something with the response. Like add a text, or capitalise etc.


const url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=sada mariya";

const showbtn = document.querySelector("#showbutton");
const outputEl = document.querySelector("#output");

showbtn.addEventListener("click",() => {
    fetch(url)
    .then(response => response.json())
    .then(data => { console.log(data)
        // var datavalue= json.contents.text;
        // console.log(datavalue);
        // outputEl.innerText= data;
        var datavalue = "HELLO  " + (data.contents.text).toUpperCase();
        outputEl.innerText= datavalue;
    });
});
