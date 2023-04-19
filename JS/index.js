const navToggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".nav-menu");
const menuLogo = document.querySelector(".menu-hamburguesa");


navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
    menuLogo.setAttribute("src", "iconos/x.svg")
    const estado = navMenu.getAttribute("class");
    console.log(estado.search("nav-menu_visible"));
    if (estado.search("nav-menu_visible") == -1){
        menuLogo.setAttribute("src", "iconos/hamburguesa.svg")
    }
})


const botonesCont = document.querySelectorAll("div.contenedor-contador > button");
console.log(botonesCont)
btnPress.addEventListener("click", () =>{
   
})

/*CONTADOR*/
let contador = document.getElementsByClassName("contador");

let restar = document.getElementsByClassName("decr");



let numero = 0;

let sumar = document.querySelectorAll(".incr");

sumar.addEventListener('click', () => {
    alert();
})