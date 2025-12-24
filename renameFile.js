let string = "Wellington cardoso Camilo";

console.log(string.slice(-6))


console.log(string.substring(-6))

let string2 = "Wellington-Cardoso";

console.log(string2.replace("-", "+"))

console.log(string2.indexOf("cardoso"))


// console.log(string.slice(0, 4))

// console.log(string.substring(0, 4))



// métodos nativos AULA 3

// SPLIT() - dividir uma string em uma array de substring

let frase1 = "Wellington Cardoso Camilo Lindo";

console.log(frase1.split())


let frase2 = "maçã,banan,laranja,melancia"

let tratado = frase2.split(",", 3); // delimitador e limite de elementos da nossa lista

console.log(tratado)


let myname = "Wellington    Cardoso  Camilo"

let quantity = myname.split(/\s+/) // usamos uma regular expression

console.log(quantity)

// let e const

let idade = 18;
idade = 20;

console.log(idade)


const idade2 = 20;

let idade89 = 99;

let resultado = idade2 + idade89;

console.log(resultado)


// logica absurda do javascript

console.log("5" + 3)

console.log("5" - 3)




// mais um teste

let string90 = "wellington cardoso camilo"

let separar = string90.split(/\s+/)

console.log(separar)

separar.splice(1, 2)
console.log(separar)

