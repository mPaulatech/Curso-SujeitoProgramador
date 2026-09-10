// let nomes = ["Maria", "João", "Lucas"];

// nomes.map((item, index)=>{
//     console.log(`${item} e ${index}`);
// });

let numeros = [1, 2, 3];

let total = numeros.reduce((acumulador, numero, indice, original)=>{
    console.log(`${acumulador} - total até o momento`);
    console.log(`${numero} - numero atual`);
    console.log(`${indice} - posição do valor`);
    console.log(`${original} - valor original do array`);

    return acumulador += numero;
});

console.log(`O total é ${total}`);