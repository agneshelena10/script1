
let valores = [15, 10, 30, 20];
for (let valor of valores ) {

if (valor % 2 == 0)  {
    console.log('valor par');
}
else {
    console.log('valor ímpar');
}
console.log(valor);
}
let objeto = {}; /* objeto usa palavras ao invés de índices*/ 
/* não é possível fazer laço com objetos */ 

let joaozinho = {
    noem: "João", 
    sobrenome: "da Silva", 
    idade: 17, 
    namorada: undefined,
    cachorros: [
        {nome: "alibaba"}
        {nome: "gogozinho"}
    ]
}