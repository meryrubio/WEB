console.log("Hello, world!");

// declarar variable
let isma = 1; //VARIABLE CONCRETA
var yanes = 2.0; //var puede ser creada en contexto de if, es como un singelton -> VARIABLE GLOBAL

if (yanes > 1) {
    let maria = false;
    console.log(maria);
}

// el == solo comprueba contenido y el === comprueba tipo y contenido

let i = 0;
let array = ["alejandro", "anyi", "12", "true"]; // se pueden hacer arrays de diferentes tipo, pero NO SE DEBE HACER

for (let i = 0; i < array.length; i++) {
    console.log(array.i);
}

//SI NO ESPERAMOS A QUE LA PAGINA SE HAYA CARGADO ANTES DE ACCEDER A SUS ELEMENTOS, NOS PUEDEN DAR ERRORES
//lambda function -> para acceder a elemntos del documento... () => {}
window.addEventListener("DOMContentLoaded", () => {
    let allH1s = document.getElementsByTagName("h1") //document para acceder al documento
    console.log(allH1s);

    for (let i = 0; i < allH1s.length; i++) {
        console.log(allH1s[i]);
        allH1s[i].innerHTML = "KAKA";
    }

    let cursivaElements = document.getElementsByClassName("cursiva");
    for (let i = 0; i < cursivaElements.length; i++) {
        cursivaElements[i].innerHTML = "SOY CURSIVA";
    }

    let titulo3 = document.getElementById("titulo3");
    titulo3.classList.add("color-rosa");
});

function validate(event) {
    event.preventDefault();
    let inputEmail = document.getElementById("input-mail");
    let inputpass = document.getElementById("input-pass");

    validateEmail(inputEmail)
}

function validateEmail(emailElement){
    let userString = emailElement.value;

    let i = 0;
    while(i < userString.length){
        if(userString[i] === "@"){
            emailElement.classList.remove("error");
            emailElement.classList.add("all-good");
            return;
        }

        i++;
    }
    //si salimos del bucle, significa que no hemos encontrado un @,
    //asi que error
    emailElement.classList.add("error");
}