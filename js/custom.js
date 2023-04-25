
function addCarrito(e){
/* obtener el objeto donde se hizo click*/
let elementoBoton =  e.target;
/* obtener el objeto el elemento padre del boton*/
let elementoArticulo =  elementoBoton.parentElement;
/* array articulo*/
let objetoArticulo= new Array();
objetoArticulo.push(elementoArticulo.querySelector("h4").innerHTML);
objetoArticulo.push(elementoArticulo.querySelector(".precioOriginal").innerHTML);
objetoArticulo.push(elementoArticulo.querySelector(".descuento").innerHTML);
objetoArticulo.push(elementoArticulo.querySelector(".precioFinal").innerHTML);
 /* Probamos elemento de cuerpo modal*/
let cuerpoModal = document.querySelector("#ventanaCarrito >div >div >div.modal-body");
/* Vaciar cuerpo modal*/
if(cuerpoModal= document.querySelector("table"))
cuerpoModal.innerHTML ="";
/* crear nuevo elemento con el contenido del articulo*/
let itemModal = document.createElement("div");
itemModal.innerHTML=`

<table class="table">
<tr>
    <td>
        <h5>${objetoArticulo[0]}</p>
        <p precioOriginal: <span class="precioOriginal">${objetoArticulo[1]}</span></p>
    </td>
    <td style="min-width: 120px;">
        <p descuento:<span class="descuento">${objetoArticulo[2]}</span></p>
        <p class="precioFriginal">${objetoArticulo[3]}</p>
      
    </td>
    </tr>  
</table>
`
cuerpoModal.append(itemModal)
alert("Se agrego el producto al carrito");

}  

function limpiarCarrito(){
let estado= confirm("¿estas seguro de vaciar el carrito?")
if(estado){
let cuerpoModal= document.querySelector("#ventanaCarrito >div >div >div.modal-body");
cuerpoModal.innerHTML=`
<picture>
<img id="carritoVacio" class="img-fluid mx-auto d-block" src="IMG-RECURSOS/carrito vacio.png" alt="carritoVacio">
            </picture>
          <p class="" >Actuamente usted no cuenta con ningun producto.</p>
`;
}
}
