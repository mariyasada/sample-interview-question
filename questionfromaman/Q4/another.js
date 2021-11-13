//  find smallest element in array
const btnFetch = document.querySelector("#btn-fetch");
const outputEl = document.querySelector("#output");
const url=" https://mock-practice.prakhar10v.repl.co/items";


btnFetch.addEventListener("click",()=>{
 fetch(url)
 .then(response =>response.json())
 .then(json => 
    {
        console.log(json);
        var price = json[0].price;
        var item = json[0].item;
        for(let i=0;i< json.length;i++)
        {
            if(price > json[i].price)
            {
                item = json[i].item;
                price = json[i].price;
            }
        }
        outputEl.innerText = `cheap item is ${item} and price is ${price}`;
    
    })
    })