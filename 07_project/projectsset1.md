# DOM BASED PROJECTS

## PROJECT1
<!-- const buttons=document.querySelectorAll(".button")
const body=document.querySelector("body")

buttons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    //console.log(e);
    //console.log(e.target); // tell from where it is coming
    if(e.target.id === 'grey'){
      body.style.backgroundColor= 'grey';
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor= 'yellow';
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor= 'white';
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor= 'blue';
    }
  })
}) -->

## PROJECT 2
<!-- 
//first learn how to take values from entries

const form= document.querySelector("form")

form.addEventListener("submit",function(e) {
  //to not send data to server
  e.preventDefault()
  const h=parseInt(document.querySelector("#height").value);
  const w =parseInt(document.querySelector("#weight").value);
  const BMI_ans = w*10000/(h*h);
  const res=document.querySelector("#results");
  res.innerHTML =BMI_ans;
}) -->