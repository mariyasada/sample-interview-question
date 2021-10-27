//  Create a web app, which On the Click of a button fetches data from the provided API and from the data, displays the item with the highest price on the screen, below the button.

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
        for(let i=0;i<json.length;i++)
        {
            if(price < json[i].price)
            {
                item = json[i].item;
                price = json[i].price;
            }

        }
        outputEl.innerText = `expensive item is ${item} and price is ${price}`;
    })
});