function primo(n) {
    let aux = verificar(n);

    if (aux) {
        return 'o numero é primo'
    } else {
        return 'o numero NÃO é primo'
    }
}

function verificar(n) {
    if (n < 2) return false
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

console.log(primo(3))

