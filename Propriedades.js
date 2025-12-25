// const objeto = {
//     propriedade: 10,
//     metodos: function() {
//         console.log("Eu sou um método!!")
//     }
// }

// console.log(objeto.propriedade);

// console.log(objeto.metodos());

// const string = "Eu sou louco por javascript"
// console.log(string.length)


const produto = {
    nome: "laptop",
    preco: 2500,
    disponibilidade: true
};

Object.assign(produto, { emEstoque: 10, categora: "eletronicos"}); // consigo adicionar novas propriedades
console.log(produto);


Object.defineProperty(produto, "disponibilidade", {value: false}); 
console.log(produto);


const origem = {
    nome: "Carlos",
    idade: 30
}

const origem2 = {
    profissao: "Engenheiro",
    cidade: "São Paulo"
}


const destino = { };

Object.assign(destino, origem, origem2) // copia para um objeto destino

// console.log(destino)

Object.defineProperty(destino, "salario", { value: 2000, enumerable: true, writable: true, configurable: true}); // Mais verboso pra adicionar propriedades, não sendo a melhor forma
console.log(destino)

delete destino.salario
console.log(destino)

// console.log(Object.keys(produto));
// console.log(Object.values(produto))
// console.log(Object.entries(produto))


const calculadora = {
    valor1: 0,
    valor2: 0,

    definirValores: function(v1, v2) {
        this.valor1 = v1,
        this.valor2 = v2
    },

    somar: function() {
        return this.valor1 + this.valor2;
    },
    subtrair: function() {
        return this.valor1 - this.valor2; 
    },
    multiplicar: function() {
        return this.valor1 * this.valor2;
    },
    dividir: function() {
        return this.valor1 / this.valor2;
    }
}

// Exemplo de uso desse objeto

calculadora.definirValores(4, 4)

console.log(`A soma total é de: ${calculadora.somar()}`)

console.log(`A subtração é: ${calculadora.subtrair()}`)

console.log(`A multiplicação é: ${calculadora.multiplicar()}`)

console.log(`A divisão é: ${calculadora.dividir()}`)



calculadora.exponenciacao = function() {
    return this.valor1 ** this.valor2;
}

console.log(calculadora.exponenciacao())

console.log("=========================================")

// Exercicio

const venda = {
    produto: "TV",
    quantidade: 2,
    precoUnitario: 1500,
    desconto: 20,

    calcularTotal: function() {
       const total =  this.quantidade * this.precoUnitario;
        return total - (total * (this.desconto / 100)) // Desconto em porcentagem
    },

    exibirDetalhes: function() {
        return `Produto: ${this.produto}`
    }
}

console.log(`O total com o desconto é de: ${venda.calcularTotal()}`)

venda.aplicarDesconto = function(percentual) {
    this.desconto = percentual;
}

venda.aplicarDesconto(10);
console.log(`O desconto foi de: ${venda.desconto}, a Venda ${venda.exibirDetalhes()}`)