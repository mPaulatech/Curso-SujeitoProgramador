// function convidados(...nomes){
//     console.log(nomes);
// }

// convidados("Maria", "João", "Lucas");

function sorteio(...numeros){
    console.log(numeros);

    const numbersorteado = Math.floor(Math.random() * numeros.length);
    console.log(numbersorteado);
}

sorteio(1, 2, 6, 15, 30, 20, 55, 90, 85, 68);