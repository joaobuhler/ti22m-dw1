pos = 3
valor = 100
vet = [10,20,30,40,50,60]




for(i = vet.length ; i>pos; i--){
    vet[i] = vet[i-1]
}

vet[pos] = 100

console.log(vet)


