// Mostramos por consola una tabla de estudiantes para verificar todo OK
console.table(students)
// Declaramos las variables que vamos a utilizar
let contenedorAlumnos = document.getElementById('misAlumnos');
let contenedorTotal = document.getElementById('total');
let contenedorNombre = document.getElementById('nombre');
let contenedorPassword = document.getElementById('password');


// Por defecto llamamos a la funcion para siempre mostrar los estudiantes al comienzo
renderizarAlumnos(students)





// Esta funcion renderiza los alumnos por medio de un for of 

function renderizarAlumnos(lista){
    contenedorAlumnos.innerHTML = '';
    for(const alumno of lista){
        contenedorAlumnos.innerHTML += `
            <td>${alumno.id}</td>
            <td>${alumno.name}</td>
            <td>${alumno.age}</td>
            <td>${alumno.note}</td>
            <td>${alumno.genre}</td>
        `
    }
    
}



// Esta funcion Vuelve a renderizar los alumnos
function mostrarAlumnos(){
    renderizarAlumnos(students)
}


// Esta funcion filtrara por nota maxima
function filtrarPorNota(note){
    const filtrados = students.filter((item)=>item.note <= note);
    return filtrados;
}

// Esta funcion nos pide por medio de un prompt, que carguemos la nota maxima y hara los filtros
function filtrarPorNotaButton(){
    contenedorAlumnos.innerHTML=''
        notaMax = parseFloat(prompt('Ingresa la nota maxima'));
        if(isNaN(notaMax) || notaMax < 0){
            alert('Ingrese un numero valido')
        }else{
            const alumnosFiltrados = filtrarPorNota(notaMax);
            console.table(alumnosFiltrados);
            renderizarAlumnos(alumnosFiltrados)
    
        }
}

//Formulario

// Esta funcion borra los campos del formulario
function borrarCampos(){
    contenedorNombre.value=''
    contenedorPassword.value='';
}

// Esta funcion verifica que los inputs contengan almenos un valor para poder enviarse
// Una vez que termina se vacian y mandan un alert saludando al usuario

function enviarDatos(){
    if(contenedorPassword.value.trim() ==='' || contenedorNombre.value.trim() ===''){
        alert('Error cargue los campos')
    }else{
        alert(`Bienvenido ${contenedorNombre.value} su contraseña es ${contenedorPassword.value}`)
        localStorage.setItem('nombre',contenedorNombre.value) // Guardamos en el localStorage el nombre de usuario
        localStorage.setItem('password',contenedorPassword.value) // Guardamos en el localStorage el password de usuario
        borrarCampos()   // Borramos los campos una vez enviados
    }

}



// Guardamos en el localStorage los datos del usuario


