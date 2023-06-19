// Cheks if the user has already been verified as older than 18 or 21 years old
let checkAge = sessionStorage.getItem("verifiedAge");
const mayorEdadBtn = document.querySelector("#mayorEdad");
const menorEdadBtn = document.querySelector("#menorEdad");
const verifyAgeLocation = document.querySelector("#verifyAge");

// When the users click to verify their age, a session storage variable is set
mayorEdadBtn.addEventListener("click",()=>{
    console.log("Mayor de edad")
    verifyAgeLocation.remove();
    sessionStorage.setItem("verifiedAge", "older");
    checkAge = sessionStorage.getItem("verifiedAge");
    console.log(checkAge);

})

// To prevent the age verification from reappearing on different pages,
// we check the session storage item "verifiedAge", and if older than the
// target age, the html element is removed.
if(checkAge=="older"){
    verifyAgeLocation.remove();
}
else{
    console.log("younger than 21");
}

// When the user clicks on either "ENGLISH" or "SPANISH" button,
// it should redirect to the current page but in spanish or english, respectively
const pagesObj = {
    '': 'en-usa.html',
    'index.html': 'en-usa.html',
    'productos.html': 'products.html',
    'historia.html': 'history.html',
    'proceso.html': 'process.html',
    'sustentabilidad.html': 'sustainability.html',
    'donde-comprar.html': 'where-to-buy.html', 
    'en-usa.html': 'index.html',
    'products.html': 'productos.html', 
    'history.html': 'historia.html',
    'process.html': 'proceso.html',
    'sustainability.html': 'sustentabilidad.html',
    'where-to-buy.html': 'donde-comprar.html'
}

// Gets current page filename
var path = window.location.pathname;
let page = path.split("/").pop();


//Navbar change language location
const changeLanguageNavbarLocation = document.querySelector("#change-lang-nav");
//Change the href attribute to the correct address
changeLanguageNavbarLocation.href=pagesObj[page];

//Footer change language location
const changeLanguageFooterLocation = document.querySelector("#change-lang-footer");
//Change the href attribute to the correct address
changeLanguageFooterLocation.href=pagesObj[page];