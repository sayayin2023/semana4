
        // Agregar un evento al formulario para capturar el envío
        document.getElementById('fechaForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar el envío del formulario

            // Obtener el año y el mes ingresados por el usuario
            const anio = parseInt(document.getElementById('anioInput').value);
            const mes = parseInt(document.getElementById('mesInput').value);

            // Función para obtener el primer y último día del mes
            function obtenerPrimerUltimoDiaDelMes(anio, mes) {
                // Verificar si el mes está dentro del rango válido (1-12)
                if (mes < 1 || mes > 12) {
                    return "El mes no es válido.";
                }

                // Crear una nueva instancia de Date para el primer día del mes
                const primerDia = new Date(anio, mes - 1, 1);

                // Calcular el último día del mes sumando 1 al mes siguiente y restando 1 día
                const ultimoDia = new Date(anio, mes, 0);

                return {
                    primerDia,
                    ultimoDia,
                };
            }

            // Obtener el primer y último día del mes
            const { primerDia, ultimoDia } = obtenerPrimerUltimoDiaDelMes(anio, mes);

            // Mostrar los resultados en el elemento con id "resultado"
            const resultadoElement = document.getElementById('resultado');
            resultadoElement.innerHTML = `
                <p>Primer día de ${mes}/${anio}: ${primerDia.toDateString()}</p>
                <p>Último día de ${mes}/${anio}: ${ultimoDia.toDateString()}</p>
            `;
        });