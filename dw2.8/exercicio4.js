function Calcular(idade, peso) {
    let dosagemMg

    if (idade >= 12) {
        if (peso >= 60) {
            dosagemMg = 1000
        } else {
            dosagemMg = 875
        }
    } else {
        if (peso >= 5 && peso <= 9) {
            dosagemMg = 125
        } else if (peso > 9 && peso <= 16) {
            dosagemMg = 250
        } else if (peso > 16 && peso <= 24) {
            dosagemMg = 500
        } else if (peso > 24) {
            dosagemMg = 750
       
    }
    }
    return (dosagemMg / 500) * 20
    
}


console.log(Calcular(15, 59))
console.log(Calcular(40, 80))
console.log(Calcular(8, 35))
console.log(Calcular(5, 20))
