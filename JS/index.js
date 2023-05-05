const navToggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".nav-menu");
const menuLogo = document.querySelector(".menu-hamburguesa");

//Navegación manual 
navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
    menuLogo.setAttribute("src", "iconos/x.svg")
    const estado = navMenu.getAttribute("class");
    console.log(estado.search("nav-menu_visible"));
    if (estado.search("nav-menu_visible") == -1){
        menuLogo.setAttribute("src", "iconos/hamburguesa.svg")
    }
})
//Navegación automática 
var counter = 1;
setInterval(function(){
    document.getElementById("radio" + counter).checked = true; 
    counter ++;
    if (counter > 4){
        counter = 1;
    }
}, 5000);




class UI {
    showProduct(pedido){
      const product_list =  document.getElementById('product-list');      
      const element = document.createElement('div');
      element.innerHTML = `
        <div class="pedido">
            <div class="card-body">
            <strong class="nombre-prod">${pedido.name}</strong>
            <strong class="precio-prod">$${pedido.price}</strong>
            </div>
            
        </div>
      `;

      product_list.appendChild(element);
    }

    deleteProduct(){

    }
}



//PEDIDO
class Productos {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }


}



var precio_total = 0;


//PRODUCT LIST







//CONTADOR
function sumar_hamburguesa_clasica(){
let name = "Clasica";
let precio = 2000;
let resta = document.querySelector('#restar');
let suma = document.querySelector('#sumar');
let contar = document.querySelector('#contar');
let contador = 0;

suma.addEventListener('click', () =>{
    contador++;
    contar.innerHTML = contador;
    precio_total += precio;
    
});
resta.addEventListener('click', () => {
    if(contador == 0){}
    else{
        contador--;
        contar.innerHTML = contador;
        precio_total -= precio;
    }

})

}

function sumar_hamburguesa_triple(){
    let name = "Triple Que";
    let price = 2000;
    let resta = document.querySelector('#decrT');
    let suma = document.querySelector('#incrT');
    let contar = document.querySelector('#contadorT');
    let contador = 0;
    suma.addEventListener('click', () =>{
        contador++;
        contar.innerHTML = contador;
        precio_total += precio;
    });
    resta.addEventListener('click', () => {
        if(contador == 0){}
        else{
            contador--;
            contar.innerHTML = contador;
            precio_total -= precio;
        }
    }) }

function sumar_hamburguesa_Onion(){
        let name = "Fried Onion"
        let price = 2000;
        let resta = document.querySelector('#decrO');
        let suma = document.querySelector('#incrO');
        let contar = document.querySelector('#contadorO');
        let contador = 0;
        let check = document.querySelector('#baconO');
        

        suma.addEventListener('click', () =>{
            contador++;
            contar.innerHTML = contador;
            precio_total += price;
            let ui = new UI();
            if(check.checked){
                
            let pedido =  new Productos("Fried Onion con bacon", 2200); 
            ui.showProduct(pedido);
            }else{
               
            let  pedido =  new Productos(name, price);
             
            ui.showProduct(pedido);
            } 
                 
        });
        resta.addEventListener('click', () => {
            if(contador == 0){}
            else{
                contador--;
                contar.innerHTML = contador;
                precio_total -= price;
            }
        }) }

function sumar_hamburguesa_cheese(){
            let hamburguesa = "Cheese Burguer";
            let precio = 2000;
            let resta = document.querySelector('#decrC');
            let suma = document.querySelector('#incrC');
            let contar = document.querySelector('#contadorC');
            let contador= 0;
            suma.addEventListener('click', () =>{
                contador++;
                contar.innerHTML = contador;
                precio_total += precio;
               
            });
            resta.addEventListener('click', () => {
                if(contador == 0){}
                else{
                    contador--;
                    contar.innerHTML = contador;
                    precio_total -= precio;
                }
            })
           
            
        }
 

sumar_hamburguesa_clasica();
sumar_hamburguesa_triple();
sumar_hamburguesa_Onion();
sumar_hamburguesa_cheese();

//CALCULAR PRECIO

function claclular_precio_onion(){
    
    var precio_onion = 2000;
    let etiqueta = document.querySelector('#precioO');
    let check = document.querySelector('#baconO');
    let bacon = 200;

    check.addEventListener('change', () => {
    
        if(check.checked){
        precio_onion += bacon;
        etiqueta.innerHTML = `$${precio_onion} C/U`;
       
        }else{
            precio_onion -= bacon;
            etiqueta.innerHTML =`$${precio_onion} C/U`;
        }
    })

}

function claclular_precio_cheese(){
    let hamburguesa = "Cheese Burguer";
    let precio = 2000;
    let etiqueta = document.querySelector('#precioCH');   
    let check = document.querySelector('#baconCH');
    let bacon = 200;

    

    check.addEventListener('change', () => {
    
        if(check.checked){
        precio += bacon;
        etiqueta.innerHTML = `$${precio} C/U`;
        
        }else{
            
            precio -= bacon;
            etiqueta.innerHTML =`$${precio} C/U`;
            
        
        }
    })

}
claclular_precio_onion();
claclular_precio_cheese();




//CONSUMIR API

/*
const API_URL = "https://my-json-server.typicode.com/gar883/api_hamburguesas"

const xhr = new XMLHttpRequest();

function onRequestHandler(){
    if(this.readyState === 4 && this.status === 200){
         const data = JSON.parse(this.response);
         const HTMLResponse = document.querySelector('#prod1');
         const tpl = data.map(Hamburguesa => Hamburguesa.nombre);
         HTMLResponse.innerHTML = `<h2>${tpl}</h2>`
    }
}

xhr.addEventListener('load', onRequestHandler);
xhr.open('GET', `${API_URL}/Hamburguesas/`);
xhr.send();

*/



