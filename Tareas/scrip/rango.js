function numeros() {
  let inicio = document.getElementById("inicio").value;
  let fin = document.getElementById("fin").value;
  let mensaje = document.getElementById("mensaje");
  let result = document.getElementById("result");

  inicio = parseInt(inicio);
  fin = parseInt(fin);

  if (isNaN(inicio) || isNaN(fin)) {
    mensaje.innerHTML = "<h3>Ingrese números válidos</h3>";
  } else if (inicio >= fin) {
    mensaje.innerHTML = "<h3>El inicio debe ser menor que el fin</h3>";
  } else {
    mensaje.innerHTML = "";
    result.innerHTML = "";

    let numerosPorLinea = 30; // Número máximo de números por línea
    let numerosGenerados = 0;

    for (let i = inicio; i <= fin; i++) {
      result.innerHTML += i + " " + " " + " ";
      numerosGenerados++;
          if (numerosGenerados >= numerosPorLinea) {
            result.innerHTML += "<br>" + "<br>"; // Agrega un salto de línea
            numerosGenerados = 0; // Reinicia el contador
          }
    }
  }
}