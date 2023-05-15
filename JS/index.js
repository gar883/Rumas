const navToggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".nav-menu");
const menuLogo = document.querySelector(".menu-hamburguesa");

//Navegación manual 
navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
    menuLogo.setAttribute("src", "iconos/x.svg")
    const estado = navMenu.getAttribute("class");
    
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


//PRECIO TOTAL
var total = document.querySelector("#total");

var array_pedido= [];


//MOSTRAR EL PEDIDO EN PANTALLA

class UI {
    showProduct(pedido){
      const product_list =  document.getElementById('product-list');      
      const element = document.createElement('div');
      element.innerHTML = `
        <div class="pedido">
            <div class="card-body">
            <p class="nombre-prod">${pedido.name}</p>
            <p class="precio-prod">$${pedido.price}</p>
            <a class="btn-eliminar" name="delete">Eliminar</a>
            </div>
            </div>
            
        </div>
      `;

      product_list.appendChild(element);
    }

    deleteProduct(element){
        if(element.name === 'delete'){
        var hermanos = element.parentElement.children;
        console.log(hermanos[0].text);


        element.parentElement.parentElement.parentElement.remove();
        precio_total-= 2000;
        total.innerHTML = `$${precio_total}`;


        
    }
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
let price = 2000;

let suma = document.querySelector('#sumar');

let ui = new UI();

suma.addEventListener('click', () =>{
    precio_total += price;
    total.innerHTML = `$${precio_total}`;

    let pedido =  new Productos("Clasica", 2000); 
    ui.showProduct(pedido);
    array_pedido.push(pedido);
    
       
    
});


}

function sumar_hamburguesa_triple(){
    let name = "Triple Que";
    let price = 2000;
   
    let suma = document.querySelector('#incrT');
    
    let ui = new UI();
    



    suma.addEventListener('click', () =>{
       
        precio_total += price;
        total.innerHTML = `$${precio_total}`;

       let pedido =  new Productos("Triple Que", 2000); 
        ui.showProduct(pedido);
        array_pedido.push(pedido);
        
    });
   /* resta.addEventListener('click', () => {
        if(contador == 0){}
        else{
            contador--;
            contar.innerHTML = contador;
            precio_total -= precio;
        }
    }) */
}

function sumar_hamburguesa_Onion(){
        let name = "Fried Onion"
        let price = 2000;
        let resta = document.querySelector('#decrO');
        let suma = document.querySelector('#incrO');
        
        let check = document.querySelector('#baconO');
        let etiqueta = document.querySelector('#precioO');
        
        check.addEventListener('click', () =>{
           if(check.checked){
            price += 200;
            etiqueta.innerHTML = `$${price} C/U`;
           }
           else {
            price -= 200;
            etiqueta.innerHTML = `$${price} C/U`;
           }
        });

        suma.addEventListener('click', () =>{
          
            precio_total += price;
            total.innerHTML = `$${precio_total}`;
            let ui = new UI();
            if(check.checked){
          
            let pedido  =  new Productos("Fried Onion c/bacon", 2200); 
            ui.showProduct(pedido);
            array_pedido.push(pedido);
           
            
            

            }else{
               
            let  pedido =  new Productos(name, 2000);
            array_pedido.push(pedido);
            ui.showProduct(pedido);
            } 
                 
        });
     }

function sumar_hamburguesa_cheese(){
            let name = "Cheese Burguer";
            let price = 2000;
            let resta = document.querySelector('#decrC');
            let suma = document.querySelector('#incrC');
           
            let etiqueta = document.querySelector('#precioCH');  
            let check = document.querySelector('#baconCH');
            let ui = new UI();
            

            check.addEventListener('click', () =>{
                if(check.checked){
                 price += 200;
                 etiqueta.innerHTML = `$${price} C/U`
                 
                }
                else {
                 price -= 200;
                
             
            
                }
             });


            suma.addEventListener('click', () =>{
              
                precio_total += price;
                total.innerHTML = `$${precio_total}`;
                

                let ui = new UI();
            if(check.checked){
          
            let pedido =  new Productos("Cheese burguer c/bacon", 2200); 
            ui.showProduct(pedido);
            array_pedido.push(pedido);
            
            

            }else{
               
            let  pedido =  new Productos(name, 2000);
             
            ui.showProduct(pedido);
            array_pedido.push(pedido);
            } 
               
            });
          /* resta.addEventListener('click', () => {
                if(contador == 0){}
                else{
                    contador--;
                    contar.innerHTML = contador;
                    precio_total -= price;
                }
            });*/
           
            
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
            
            precio-= bacon;
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



//DOM Event
document.getElementById('product-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteProduct(e.target);
    array_pedido.shift();
});