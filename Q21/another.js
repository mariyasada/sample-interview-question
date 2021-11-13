// this is for practicing with array. find a largest number
const checkBtn = document.querySelector("#check");
const outputEl = document.querySelector("#output");
const arrayList=[20,30,40,60,90,1000,200,55,2222];


checkBtn.addEventListener("click",()=>{

    console.log("clicked");
    var element = arrayList[0];
    var highestelement ="";
    for(let i=0; i < arrayList.length;i++)
    {
        console.log(element);
        if(element < arrayList[i])
        {
            console.log(arrayList[i])

               highestelement = arrayList[i];
               outputEl.innerText=" highest element is  " + highestelement;
        }
    }

});

// function smallest()
// {
//     const arrayList=[20,30,40,60,90,1000,200,55,2222];
//     var element =arrayList[arrayList.length-1];
//     console.log(element);
//     var smallestnumber= "";

//     for( let i=0; i<arrayList.length;i++)
//     {
//         if(element > arrayList[i])
//         {
//             console.log(element);
//             smallestnumber=arrayList[i];
//             outputEl.innerText=" smallest element is  " + smallestnumber;
//         }
//     }
// }

// smallest();