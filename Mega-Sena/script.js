function megaSena(number){
    if (number < 6 || number > 9){
        return "Não é possível usar este número!!";
    } else {
        const lista = [];
        for (let i = 0; i < number; i++){
            const numero = Math.floor(Math.random() * 60) + 1;
            lista.push(numero);
        }
        return lista;
    }
}

console.log(megaSena(9));