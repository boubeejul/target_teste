const inverte_string = (string) => {
    let string_invertida = ""

    for(i = string.length - 1; i >= 0; i--) {
        string_invertida += string[i]
    }

    return string_invertida
}
