function calcular() {
    let troco = document.getElementById("troco").value;
    let cedula20 = Calcular20(troco);
    let resto20 = CalcularResto20(troco);
    let cedula10 = Calcular10(troco);
    let resto10 = CalcularResto10(troco);
    document.getElementById("resp").innerText = cedula20;
    document.getElementById("resp2").innerText = resto20;
    document.getElementById("resp3").innerText = cedula10;
    document.getElementById("resp4").innerText = resto10;

}

function Calcular20(troco) {
    let valor = 0;
    valor = troco / 20;
    return valor;

}

function CalcularResto20(troco) {
    let resto = 0
    resto = troco % 20;
    return resto;
}

function Calcular10(troco) {
    let valor2 = 0;
    valor2 = troco / 10;
    return valor2;

}

function CalcularResto10(troco) {
    let resto2 = 0
    resto2 = troco % 10;
    return resto2;
}
