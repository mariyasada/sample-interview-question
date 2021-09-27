// create a app with one input element and two buttons of 2px and 5px. when we clicked 2px button the border of input elements set as 2px and v
//  like as for 5px.

const input = document.querySelector("#inputtext");
const twopxbtn = document.querySelector("#twopixel");
const fivepxbtn = document.querySelector("#fivepixel");

twopxbtn.addEventListener("click",()=>{

    console.log("clicked");
    input.style.border = " solid 10px";
});

fivepxbtn.addEventListener("click",()=>{

    console.log("clicked");
    input.style.border = " dotted 5px";
});
