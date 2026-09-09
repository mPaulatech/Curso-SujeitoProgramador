// Arrays

let primeiros = [1, 2, 3];

let numeros = [...primeiros, 4, 5, 10];

console.log(numeros);

// Objects

let pessoa = {
    nome: "Maria",
    sobrenome: "Silva",
}

let informações = {
    ...pessoa,
    idade: "20",
    profissão: "Programadora"
}

console.log(informações);

// Exemplo do dia a dia:

function novaPessoa(info){
    let dados = {
        nome: "João",
        idade: "50",
        ...info
    }

    console.log(dados);
}

novaPessoa({cargo: "Pintor III", empresa: "Liebherr"})