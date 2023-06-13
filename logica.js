console.table(productos)
const carrito = []
let contenedorProds = document.getElementById('misprods');
let contenedorTotal = document.getElementById('total');
let contenedorNombre = document.getElementById('nombre');
let contenedorPassword = document.getElementById('password');
let contenedorMostrarProductos = document.getElementById('buttonMostrarProductos');
let contenedorButtonTable = document.getElementsByClassName('btnTable')
let precioMax=100000;
console.log('sdasd'+contenedorMostrarProductos)

function filtrarPrecio(precio){
    const filtrados = productos.filter((prod)=>prod.precio <= precio);
    return filtrados;
}


function filtrarPorPrecioButton(){
        contenedorProds.innerHTML=''
        precioMax = parseFloat(prompt('Ingresa el precio maximo que se puede abonar'));
        if(isNaN(precioMax) || precioMax < 0){
            alert('Ingrese un numero valido')
        }else{
            const prodsFiltrados = filtrarPrecio(precioMax);
            console.table(prodsFiltrados);
            renderizarProductos(prodsFiltrados)
    
        }
}


function borrarCampos(){
    contenedorNombre.value=''
    contenedorPassword.value='';
}

contenedorButtonTable.onmouseover = () => {
    contenedorButtonTable.classList.replace('btn-primary','btn-warning')
}


function renderizarProductos(listaProds){
    contenedorProds.innerHTML = ''
    for(const prod of listaProds){
        contenedorProds.innerHTML += `
            <td>${prod.id}</td>
            <td>${prod.nombre}</td>
            <td>${prod.precio}</td>
            <td><button id=${prod.id} class="btnTable">+</button></td>
        `
    }
    
}
console.log(contenedorNombre)


function enviarDatos(){
    if(contenedorPassword.value.trim() ==='' || contenedorNombre.value.trim() ===''){
        alert('Error cargue los campos')
    }else{
        alert(`Bienvenido ${contenedorNombre.value} su contraseña es ${contenedorPassword.value}`)
        borrarCampos()   
    }

}

for(const boton of contenedorButtonTable){
    boton.addEventListener('click',()=>{
        console.log(agregarProdsCarrito)
        const agregarProdsCarrito = productos.find((prod)=>prod.id === boton.id)
        carrito.push(agregarProdsCarrito)
    })
}



function mostrarProductos(){
    renderizarProductos(productos)
}

renderizarProductos(productos)