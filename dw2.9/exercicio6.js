function calcularFatorial(num) {
    for (let i = num - 1; i >= 1; i--) {
        num = num * i;}
        return num;


}

console.log(calcularFatorial(4))