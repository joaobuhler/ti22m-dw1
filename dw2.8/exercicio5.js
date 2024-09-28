function converter(centimetros, unidade) {

    if (unidade === "m") {
        return centimetros / 100

    } else if (unidade === "mm") {
        return centimetros * 10

    } else if (unidade === "km") {
        return centimetros / 100000
}

}

console.log(converter(10, 'm'))
console.log(converter(100, 'mm'))
console.log(converter(1000, 'km'))