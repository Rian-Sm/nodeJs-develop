function inverterString(s) {
    let invertida = "";
    for (let char of s) {
        invertida = char + invertida;
    }
    return invertida;
}

const string = prompt("Informe uma string: ");
console.log(`String invertida: ${inverterString(string)}`);
