function calcular() {
    let capital = document.getElementById("capital").value;
    let taxa = document.getElementById("taxa").value;
    let periodo = document.getElementById("periodo").value;
    let saida = CalcularJuros(capital, taxa, periodo);
    document.getElementById("resp").innerText = saida;
}
function CalcularJuros(capital, taxa, periodo){
    let montante = 0
    montante = capital * (1 + taxa)**periodo;
    return montante;

}
