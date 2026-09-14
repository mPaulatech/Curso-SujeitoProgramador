// Crie uma lista de produtos
// 1.
let produtos = ["Computador", "Telefone", "Mouse", "Teclado"];
console.log(produtos);

// 2.
console.log(produtos.length);

// 3.
const reduzir = produtos.filter(produtos => produtos !== "Mouse");
console.log(reduzir);

// 4.
const procurar = produtos.find((item)=>{
    return item == "Computador"
});

console.log(`Achamos o seu produto ele se chama computador ${procurar}`);

// 5.
const remover = produtos.filter(produtos => produtos !== "Telefone");
console.log(remover);

// Crie uma lista de apenas numeros 1,3,5,7,0,9
let numeros = [1, 3, 5, 7, 0, 9];

// 1.
numeros.sort((a, b) => a - b);
console.log(numeros);

// 2.
numeros.shift();
console.log(numeros);

// 3.
numeros.sort((a, b) => b - a);
console.log(numeros);

// Crie uma string que contenha o dia de hoje
let data = new Date();
console.log(data);

let dia = data.getDate();
console.log(dia);

let mes = data.getMonth() + 1;
console.log(mes);

let ano = data.getFullYear();
console.log(ano);