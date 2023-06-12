console.log("Test")

let checkAge = sessionStorage.getItem("verifiedAge");
const mayorEdadBtn = document.querySelector("#mayorEdad");
const menorEdadBtn = document.querySelector("#menorEdad");
const verifyAgeLocation = document.querySelector("#verifyAge");

mayorEdadBtn.addEventListener("click",()=>{
    console.log("Mayor de edad")
    verifyAgeLocation.remove();
    sessionStorage.setItem("verifiedAge", "older");
    checkAge = sessionStorage.getItem("verifiedAge");
    console.log(checkAge);

})

menorEdadBtn.addEventListener("click",()=>{
    console.log("Menor de edad")
})

if(checkAge=="older"){
    console.log("My dude is 21+");
    verifyAgeLocation.remove();
}
else{
    console.log("younger than 21");
}


