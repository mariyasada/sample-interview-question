// Create two objects with name, age, and power as Ram, 2500, Treta. Krishna, 2325, Dwapar. Say if every character in name is worth 35 power points.

// Write a function which takes two objects and return the person with more power based on their name and power both.

const outputEl = document.querySelector("#output");

object1={
    name:"Ram",
    age: 25,
    yuga:"Treta",
    power:2500
};
object2={
    name:"Krishna",
    age:31,
    yuga:"Dwapar",
    power:2325
};
// Say if every character in name is worth 35 power points.
// function calculatePowerPoints(obj1,obj2)
// {
//     if(object1.name.length > object2.name.lenth)
//     {
//          const sumofPowerPoints = 35 * (object1.name.length);
//          outputEl.innerText = `sum of power points for ${object1.name } is ${sumofPowerPoints}`;
//          return sumofPowerPoints ;
//     }
//     else
//     {
//         const sumofPowerPoints = 35 * (object2.name.length);
//         outputEl.innerText = `sum of power points for ${object2.name } is ${sumofPowerPoints}`;
//         return sumofPowerPoints;    // console.log("krishna");
//     }
    
// }



function comparePower(obj1,obj2)
{
    const sumofPowerPoints1 = 35 * (object1.name.length);
    outputEl.innerText = `sum of power points for ${object1.name } is ${sumofPowerPoints1}`;
    const sumofPowerPoints2 = 35 * (object2.name.length);
    outputEl.innerText = `sum of power points for ${object2.name } is ${sumofPowerPoints2}`;

                if((sumofPowerPoints1 > sumofPowerPoints2) && (object1.power >object2.power))
                {
                         outputEl.innerText =`${object1.name} is more powerful than ${object2.name}`; 
                }
            
                else
                    { 
                        outputEl.innerText =`${object2.name} is more powerful than ${object1.name}`;
                    }
}

comparePower(object1,object2);