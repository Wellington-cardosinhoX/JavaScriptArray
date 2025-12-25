let inteiro = 42;
let numeroFloat = 3.4553;
let numeroFloat2 = 3.4533;

// Verificar se o número é um inteiro - retornar um booleano

console.log(Number.isInteger(inteiro))
console.log(Number.isInteger(numeroFloat))


// Formatar número de acordo com as casas decimais 

console.log(numeroFloat.toFixed(2));

console.log(numeroFloat2.toFixed(2));

console.log(numeroFloat2.toFixed());


// Formatar número precisão específica

console.log(numeroFloat2.toPrecision(3)); // número dígitos que o numeral irá ter


let flutuanteString = "3.4567";

let flutuanteString2 = "4.4544";

// Converter o valor (geralmente em string) para um número

console.log(typeof Number.parseFloat(flutuanteString))

console.log(typeof Number.parseFloat(flutuanteString2))


console.log("-=================================")

// Converter um inteiro para uma string - opcional - base numérica

let numero = 42; // base decimal
console.log(typeof numero)
console.log(numero.toString(2)); // isso me traz a base binário do número colocado dentro desse método toString()
console.log(numero.toString(8)) // base octal

// 2 - 36

// Converter uma string para um número inteiro, considerando a base numerica (opcional)

console.log(Number.parseInt(flutuanteString, 2))

console.log(Number.parseFloat(flutuanteString).toFixed(2))

console.log(Number.parseInt(flutuanteString));


console.log("===================================")


let notANumber = NaN;
let notANumber2 = 0/0;
let string = Number("Olá");

console.log(notANumber)
console.log(notANumber2)
console.log(string)


// Verifica se o valor passado é nan - retorna um booleano

console.log(Number.isNaN(notANumber))

console.log(Number.isNaN(notANumber2))

console.log(Number.isNaN(string))

console.log(Number.isNaN(45))


// Infinity  /  -infinity

let infinito = Infinity;
let infinito2 = -1 / 0;
let multiplicacao = Number.MAX_VALUE * 2;


console.log(Number.isFinite(infinito))
console.log(Number.isFinite(infinito2))
console.log(Number.isFinite(multiplicacao))

// console.log(infinito, infinito2, multiplicacao)





