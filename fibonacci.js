const fibonacci = (numero) => {
    let lista_numeros = [0,1]

    for (i = 2; i < numero; i ++) {
        lista_numeros.push(lista_numeros[i-1] + lista_numeros[i-2])
    }

    if (!lista_numeros.includes(numero)) {
        return "O número informado não pertence à sequência."
    } else {
        return "O número informado pertence à sequência."
    }
}
