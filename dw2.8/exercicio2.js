function ehTriangulo(l1, l2, l3) {
    
    return (l1 + l2 > l3) && 
           (l1 + l3 > l2) && 
           (l2 + l3 > l1)
}


let l1 = 10
let l2 = 20
let l3 = 15

if (ehTriangulo(l1, l2, l3)) {
    console.log(`Os lados ${l1}, ${l2} e ${l3} formam um triângulo`)
} else {
    console.log(`Os lados ${l1}, ${l2} e ${l3} NÃO formam um triângulo`)
}

