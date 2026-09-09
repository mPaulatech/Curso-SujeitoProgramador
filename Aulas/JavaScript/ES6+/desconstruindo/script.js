// Objeto

let pessoa = {
    nome: "Maria",
    sobrenome: "Silva",
    empresa: "Estudante",
    cargo: "Desenvolvedora FullStack"
}

let sobrenome = "Carvalho";

const {nome, cargo, sobrenome:sobPessoa} = pessoa;

console.log(nome);
console.log(sobPessoa);
console.log(cargo);

// Listas

let nomes = ["João", "Marco", "Rodolfo"];

let {0:pai, 2:neto} = nomes;

console.log(pai);
console.log(neto);

// outra forma de descontruir listas é pela posição

let [primeiroNome, segundoNome, terceiroNome] = nomes;

console.log(primeiroNome);
console.log(segundoNome);
console.log(terceiroNome);