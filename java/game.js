const urlParams = new URLSearchParams(window.Location.URLSearchParams);
        const jugadores = JSON.parse(decodeURIComponent(urlParams.get('jugadores')));

        // Función para mezclar un array (algoritmo de Fisher-Yates)
        function mezclarArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        // Array de cartas con desafíos
        const cartasConDesafios = [
            { carta: 'Corazones', desafio: 'Baila durante 10 segundos.' },
            { carta: 'Diamantes', desafio: 'Canta una canción.' },
            { carta: 'Picas', desafio: 'Recita un chiste.' },
            { carta: 'Tréboles', desafio: 'Habla como un robot durante 1 minuto.' }
            // Agrega más cartas y desafíos según tus preferencias
        ];

        // Función para repartir cartas y desafíos a los jugadores
        function repartirCartas() {
            mezclarArray(cartasConDesafios);
            const cartas = document.getElementById('cartas');
            cartas.innerHTML = '';

            jugadores.forEach((jugador, index) => {
                const carta = cartasConDesafios[index % cartasConDesafios.length];
                cartas.innerHTML += `<p>${jugador}: ${carta.carta} - ${carta.desafio}</p>`;
            });
        }

        // Mostrar nombres de jugadores
        const jugadoresDiv = document.getElementById('jugadores');
        jugadoresDiv.innerHTML = `<h2>Jugadores:</h2><ul>${jugadores.map(jugador => `<li>${jugador}</li>`).join('')}</ul>`;

        // Agregar manejador de eventos al botón de repartir cartas
        document.getElementById('repartirCartas').addEventListener('click', repartirCartas);
    