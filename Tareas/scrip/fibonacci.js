
// Agregar un evento al formulario para capturar el envío
document.getElementById('fibonacciForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener el valor de n ingresado por el usuario
    const n = parseInt(document.getElementById('nInput').value);

    // Función para calcular la secuencia de Fibonacci
    function fibonacciConFor(n) {
        const fibonacci = [0, 1];

        for (let i = 2; i <= n; i++) {
            const next = fibonacci[i - 1] + fibonacci[i - 2];
            fibonacci.push(next);
        }

        return fibonacci;
    }

    // Calcular la secuencia de Fibonacci
    const resultado = fibonacciConFor(n);

    // Mostrar los resultados en el elemento con id "resultado"
    document.getElementById('resultado').innerHTML = `
        <p>Secuencia de Fibonacci para n=${n}:</p>
        <ul>${resultado.map(term => `<li>${term}</li>`).join('')}</ul>
    `;
});