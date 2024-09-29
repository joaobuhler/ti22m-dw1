function verificar(n) {
    if (n < 2) return false
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false
    }
    return true
}

function imprimirPrimos(N) {
    let contagem = 0
    let n = 2

    while (contagem < N) {
        if (verificar(n)) {
            console.log(n)
            contagem++
        }
        n++
    }
}


imprimirPrimos(11)
