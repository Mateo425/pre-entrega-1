// Pedimos al usuario que ingrese un numero
var numero = prompt("Ingrese cantidad de numeros a introducir");
// convertimos el valor ingresado a un numero entero
numero = parseInt(numero);
// Verificamos si el numero ingresado es un numero válido
if (isNaN(numero)) {
    alert("Por favor, ingresa un número válido.");
} else {
// Iniciamos una variable para almacenar los numeros impares
  var numerosImpares = "";
  // Verificamos si el numero ingresado es mayor a 0
    if (numero > 0) {
        //Recorremos los numeros del 1 al numero ingresado

        for (var i = 1; i <= numero; i++) {
            //verificamos si el numero es impar

            if (i % 2 !== 0) {
                // si es impar, lo agregamos a la cadena de numeros impares
                numerosImpares += i + " ";
            }
        }

        alert("Los números impares menores o iguales a " + numero + " son:\n" + numerosImpares);
    } else if (numero === 0) {

        alert("El número ingresado es igual a 0.");
    } else {

        alert("El número ingresado es menor que 0.");
    }
}