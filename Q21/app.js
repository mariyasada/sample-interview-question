const checkBtn = document.querySelector("#check");
const outputEl = document.querySelector("#output");
const url = " https://mock-practice.prakhar10v.repl.co/items";

checkBtn.addEventListener("click",()=>{
    
    fetch(url)
    .then(response => response.json())
    .then(json => {
        console.log(json);
        
        var Item = json[0].item;
        var price = json[0].price;
        for(let i=0; i < json.length; i++)
        {  // console.log(json[i]);
    
        if(price < json[i].price)
        {     
            Item = json[i].item;
            price = json[i].price;
        }      
    }
    outputEl.innerText = `expensive item is ${Item} and price is ${price}`;
    
        
})
    .catch(errorHandler)

});
function errorHandler(error)
{
    console.log("something wrong",error);
}