
// Obtén una referencia al botón y al elemento donde mostrarás el contador.
    var contarBoton = document.getElementById("contarBoton");
    var contador = document.getElementById("contador");
    var contar=0;

    // Agrega un controlador de eventos al botón para contar elementos y mostrar el resultado.
    contarBoton.onclick = function(){
        contar++;
        contador.textContent=contar;
        // Actualiza el contenido del elemento de contador con la cantidad de elementos encontrados.
        contador.textContent = elementos.length;
    };
 // Agrega un controlador de eventos para el envío del formulario
 document.getElementById("For-Registro").addEventListener("submit", function(event) {
    // Evita que se envíe el formulario de manera predeterminada
    event.preventDefault();
    
    // Limpia el valor del campo de entrada
    document.getElementById("Nombres","Apellidos").value = "";
});

