let cantidadJugadores = 0;
let jugadores = [];

    
function mostrarFormularioNombres() {

    document.getElementById('jugadoresForm').addEventListener('submit', function(event) {
        event.preventDefault();
    cantidadJugadores = parseInt(document.getElementById('cantidadJugadores').value, 6);

    if (cantidadJugadores > 0) {
        const nombresInput = document.getElementById('nombresInput');
        nombresInput.innerHTML = '';

        for (let i = 1; i <= cantidadJugadores; i++) {
            nombresInput.innerHTML += `<input type="text" placeholder="Nombre del jugador ${i}" required><br>`;
        }

        document.getElementById('seleccionarJugadores').style.display = 'none';
        document.getElementById('ingresarNombres').style.display = 'block';

    }
    });
}
function iniciarJuego() {
    nombresForm = document.getElementById('nombresForm');
    const inputs = nombresForm.getElementsByTagName('input');

    for (let i = 0; i < cantidadJugadores; i++) {
        jugadores.push(inputs[i].value);
    }
    window.location.href="index.html";
    //window.location.href = "index.html"+encodeURIComponent(JSON.stringify(jugadores));
}

       


