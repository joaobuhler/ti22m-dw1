function VerificarPreco(alcool, gasolina) {

    if (alcool < 0.7 * gasolina) {
        console.log("Álcool compensa")
        return true
    } else {
        console.log("Gasolina Compensa")
        return false
    }
}

console.log(VerificarPreco(3.00, 5.00))

