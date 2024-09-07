function Calcular() {
    let VelocidadeVia = Number(document.getElementById("VelocidadeMaxima").value);
    let VelocidadeVeiculo = Number(document.getElementById("VelocidadeVeiculo").value);
    let aux = (VelocidadeVeiculo - VelocidadeVia)
    let porcentagem = ( aux / VelocidadeVia)
    let porcentagemMulta = (porcentagem * 100)
    let saida = CalcularMulta(VelocidadeVeiculo, VelocidadeVia);
    document.getElementById("resposta").innerText = "Você excedeu a velocidade máxima em " + porcentagemMulta + "% .Sua multa é de: " + saida;
}

function CalcularMulta(VelocidadeVeiculo, VelocidadeVia) {
    let valor = "";

    if (VelocidadeVeiculo <= VelocidadeVia){
        valor = "Não tem Multa"
    }

    else if ((VelocidadeVeiculo - VelocidadeVia) /100 < 0.2 ){
        valor = " R$ 130,16";
    }

    else if ((VelocidadeVeiculo - VelocidadeVia) /100 >= 0.2  && (VelocidadeVeiculo - VelocidadeVia) /100 <= 0.5) {
        valor = "R$ 195,23"
    }

    else if ((VelocidadeVeiculo - VelocidadeVia) /100 > 0.5 ){
        valor = "R$ 880,41";
    }


    return valor;
}