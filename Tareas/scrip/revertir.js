
        // Agrega un evento al formulario para capturar el envío
        document.getElementById('palabraForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Evita el envío del formulario

            // Obtiene el valor ingresado por el usuario
            const palabra = document.getElementById('palabraInput').value;

            // Función para revertir una palabra
            function revertirPalabra(palabra) {
                // Convierte la cadena en un arreglo de caracteres, invierte el arreglo y luego únelo nuevamente en una cadena
                const palabraRevertida = palabra.split('').reverse().join('');
                return palabraRevertida;
            }

            // Verificar si se ingresó una palabra
            if (palabra === "") {
                document.getElementById('resultado').textContent = "No ingresaste una palabra.";
            } else {
                // Llama a la función para revertir la palabra e imprime el resultado
                const palabraRevertida = revertirPalabra(palabra);
                document.getElementById('resultado').textContent = "Palabra original: " + palabra + ", Palabra revertida: " + palabraRevertida;
            }
        });
