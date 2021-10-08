 const inputpassword=document.querySelector("#input-password");
 const BtnCheck = document.querySelector("#btn-check");
 const output = document.querySelector("#output");

 inputpassword.addEventListener("input",()=>{
  console.log("inputt");
  var inputValue = inputpassword.value;
  if(inputValue.length <10)
  {
      inputpassword.style.borderColor ="green";
  }

 });

 BtnCheck.addEventListener("click",()=>{

    console.log("clicked");
    if (inputpassword.type ==="text")
    {
    inputpassword.type ="password";
    }
    else if(inputpassword.type ==="password")
    {
        inputpassword.type ="text";
    }
    else{
        output.innerText =" something else";
    }

 });
