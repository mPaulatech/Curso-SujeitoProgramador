// 1 - Verificador de numero

function Verificador(a){
    if(a > 0){
        return "Este numero é Positivo!!";
    }else if(a < 0){
        return "Este numero é Negativo!!";
    }else{
        return "Este numero é Zero!!";
    }
};

console.log(Verificador(2));

// 2 Verifição de elemento de Array

let lista = [17, 42, 58, 73, 91];

function verificarNumero(lista, numero){
    if(lista.includes(numero)){
        return "O numero existe no Array!";
    }else{
        return "O numero não existe no Array!!"
    }
};

// console.log(verificarNumero(lista, 20));

// 3 Encontrar produto com o preço igual a 20

const products = [
  { name: 'Maça', price: 2.5 },
  { name: 'Coca cola', price: 8 },
  { name: 'Guarana', price: 5 },
  { name: 'Chocolate', price: 20 }
];

const produtoEncontrado = products.find(produto => produto.price === 20);
console.log(produtoEncontrado);

// 3.1 Filtrar produtos com preço menor que R$8

const produtosBaratos = products.filter(produto => produto.price < 8);
console.log(produtosBaratos);