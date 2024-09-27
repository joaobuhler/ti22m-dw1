function bissexto(ano){
    let aux = validar(ano);

    if (aux) {
        return 'O ano é bissexto'
        }
        else {
        return 'Não é bissexto'
        }
}
  function validar(ano) {
             let validar = false;
             if (ano%4==0) {
         validar = true;
          }
              return validar;
            
}

console.log(bissexto(1890)) 