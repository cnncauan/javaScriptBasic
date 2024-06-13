console.log(`\n Working with conditionals`);

const listDestionation = new Array(
    `Messejana`,
    `Parquelândia`,
    `Barroso`
);


const buyerAge = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Messejana";

console.log("\n possible destation");
console.log(listDestionation);

const podeComprar = buyerAge >= 17 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while (contador < 3) {
    if (listDestionation[contador] == destino) {
        console.log("Destino existe");
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destino) {
    console.log("Boa viagem");
} else {
    console.log("Desculpa tivemos um erro!");
}

for (let cont = 0; contador < 3; cont++) {
    if (listDestionation[contador] == destino) {
        destinoExiste = true;
    }
}