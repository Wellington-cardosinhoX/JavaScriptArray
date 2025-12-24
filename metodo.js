console.log("Wellington Cardoso Camilo")

function saudacao(nome) {
    return `Olá, ${nome}`
}

console.log(saudacao("Wellington Cardoso Camilo"))


console.log(saudacao("Ana"))

console.log(saudacao("Carlos"))

console.log(saudacao("Daniel"))


const pessoa = {
    nome: "ana",
    saudacao: function() {
        return `Olá, ${pessoa.nome}`
    }
}


console.log(pessoa.saudacao())


// String - Sequência de caracteres


// Exemplos com métodos para o tipo string


let string = "Olá mundo";
console.log(string.toUpperCase()); // Letras maiúsculas

console.log(string.toLowerCase()); // Letras minúsculas

// slice (start, end)
console.log(string[0])

console.log(string.at(-1)) // forma de pegar o último indice da string

console.log(string[string.length - 1]) // uma outra forma de pegar o ultimo indice da string

console.log(string.slice(0, 4)) // o nosso slice serve para 'fatiar' a string. Devemos colocar o indice de start e indice de end

console.log(string.slice(-6))


// substring (start, end)

console.log(string.substring(0, 5));

console.log(string.substring(7, 3)); // se eu fizer isso ele vai inverter os dados (3, 7)