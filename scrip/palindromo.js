
        // Agregar un evento al formulario para capturar el envío
        document.getElementById('palindromoForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar el envío del formulario

            // Obtener la palabra ingresada por el usuario
            const palabra = document.getElementById('palabraInput').value;

            // Función para verificar si una palabra es un palíndromo
            function esPalindromo(palabra) {
                // Eliminar espacios en blanco y convertir a minúsculas para ignorar diferencias de mayúsculas y minúsculas
                palabra = palabra.toLowerCase().replace(/ /g, '');

                // Revertir la palabra
                const palabraRevertida = palabra.split('').reverse().join('');

                // Verificar si la palabra original y la palabra revertida son iguales
                return palabra === palabraRevertida;
            }

            // Verificar si la palabra es un palíndromo
            const esPalindromoResultado = esPalindromo(palabra);

            // Mostrar el resultado en el elemento con id "resultado"
            const resultadoElement = document.getElementById('resultado');
            resultadoElement.textContent = esPalindromoResultado
                ? `${palabra} es un palíndromo.`
                : `${palabra} no es un palíndromo.`;
        });