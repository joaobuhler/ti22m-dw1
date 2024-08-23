function calcular(){
    let distancia = document.getElementById("distancia").value;
    let autonomia = document.getElementById("autonomia").value;
    let valorPedagio = Number(document.getElementById("valorPedagio").value);
    let saida = CalcularGastos(distancia, autonomia, valorPedagio);
    document.getElementById("resp").innerText = saida;
}

function CalcularGastos(distancia, autonomia, valorPedagio){
    let gastos;
    gastos = (distancia / autonomia) + valorPedagio;
    return gastos;
}
