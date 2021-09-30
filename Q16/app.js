// Create two objects with name, age, and power as Ram, 2500, Treta. Krishna, 2325, Dwapar Write a function which takes two objects and return the person with more power
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
function comparePower(obj1,obj2){
    if(object1.power >= object2.power){
        outputEl.innerText = `${object1.name} is more Powerful than ${object2.name} with power ${object1.power}`;
    }
    else{
        outputEl.innerText = `${object2.name} is more Powerful than ${object1.name} with power ${object2.power}`;
    }
}

comparePower(object1,object2);
