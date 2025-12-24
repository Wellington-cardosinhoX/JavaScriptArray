let letras = ["d", "a", "b", "e", "f", "g"];
let numeros = [1, 4, 6, 2, 89, 12];

numeros.sort(); // responsável por ordenar meus numeros
console.log(numeros)

letras.sort();
console.log(letras);

letras.reverse(); // reverter os elementos
console.log(letras)


let mesclaArray = letras.concat(numeros) // concatena as listas
console.log(mesclaArray)


// let frutas = ["maçã", "uva", "laranja"];

// console.log(frutas.indexOf("uva"));

// console.log(frutas.splice(0, 1))

// console.log(frutas.splice(0, 1, 10))


// console.log(frutas)



let frutas = ["maçã", "banana", "manga"];

console.log(frutas.includes("banana"))
console.log(frutas.includes(45))

console.log(frutas.every(function(fruta) {
    return fruta.includes("m")
})) 



console.log(frutas.join(" - "))

