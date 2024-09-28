function verificarTipoTriangulo(a, b, c) {
    
    if (a <= 0 || b <= 0 || c <= 0) {
        return "as medidas precisam ser maiores que zero"
    }
    
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "essas medidas não formam um triangulo"
    }
    
    if (a === b && b === c) {
        return "triangulo equilatero"

    } else if (a === b || a === c || b === c) {
        return "triangulo isosceles"

    } else {
        return "triangulo escaleno"
    }
}

console.log(verificarTipoTriangulo(3, 3, 3))
console.log(verificarTipoTriangulo(1, 1, 6))

