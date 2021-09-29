// Create two objects with name, age, and yuga as Ram, 25, Treta. 
// Krishna, 31, Dwapar. Write a function which takes two objects and return the person with more age.

const outputEl = document.querySelector("#output");
const object1={
    name:"Ram",
    age:25,
    yuga:"Treta"
};

const object2={
    name:"Krishna",
    age:31,
    yuga:"Dwapar"
};

function findage(obj1,obj2)
{
    if(object1.age > object2.age)
    {
       outputEl.innerText =`${object1.name} is older than ${object2.name}`;
    }
    else{
        outputEl.innerText =`${object2.name} is older than ${object1.name} and krishna's age is ${object2.age}`;
    }
}

findage(object1,object2);
