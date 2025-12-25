const valor1 = "150.50";

const valor2 = "200px";

const valor3 = "abc";

console.log(typeof valor1)

console.log(typeof valor2)

console.log(typeof valor3)

console.log(Number.parseFloat(valor1))

console.log(Number.parseInt(valor2)) // ele vai descartar o px e manter só o numero inteiro

// console.log(typeof Number(valor3))

console.log(Number.isNaN(valor3))



// Exercicio 2, converter para numeros e somar

const numero1 = "10";
const numero2 = "20.5";

const result = Number.parseFloat(numero1) + Number.parseInt(numero2);

console.log(result)




