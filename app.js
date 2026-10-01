
// Función para sumar dos números
function sumar(num1, num2) {
  return num1 + num2;
}

// Función para restar dos números
function restar(num1, num2) {
  return num1 - num2;
}

// Función para multiplicar dos números
function multiplicar(num1, num2) {
  return num1 * num2;
}

// Función para dividir dos números
function dividir(num1, num2) {
  if (num2 === 0) {
    return "No se puede dividir entre cero";
  } else {
    return num1 / num2;
  }
}

// Ejemplo de uso
console.log(sumar(2, 3)); // Output: 5
console.log(restar(5, 2)); // Output: 3
console.log(multiplicar(4, 6)); // Output: 24
console.log(dividir(10, 2)); // Output: 5
console.log(dividir(10, 0)); // Output: "No se puede dividir entre cero"
