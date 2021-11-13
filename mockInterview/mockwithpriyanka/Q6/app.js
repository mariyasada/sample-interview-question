const btnFetch = document.querySelector("#btn-fetch");
const outputEl = document.querySelector("#output");
const mainDiv = document.querySelector("#main-div");

var arrayList =[{name:"mariya",age: 25},{name:"aarzoo", age:18},{name:"fida",age: 16},{name:"ahfaaz",age:3}];

btnFetch.addEventListener("click",()=>{
    console.log("click");

    arrayList.map(item =>{
        if(item.age < 23)
        {
            outputEl.innerText += `  ${item.name} is ${item.age} year old. ` ;
        }
    })
    
})
var listElement = document.createElement("li");
var textNode = document.createTextNode("hello, i am mariya sada");
mainDiv.appendChild(listElement);
listElement.appendChild(textNode);