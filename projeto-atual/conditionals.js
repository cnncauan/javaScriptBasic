console.log(`Working with conditionals`);

const listDestionation = new Array(
    `Messejana`,
    `Parquelândia`,
    `Barroso`
);


const buyerAge = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("possible destation");
console.log(listDestionation);

if (
    buyerAge >= 18 || estaAcompanhada == true) {
    console.log("boa viagem");
    listDestionation.splice(2, 1);
} else {
    console.log("Não é maior de idade, e não está acompanhado, logo não posso vender");
}


console.log("Embarque: \n\n");
if (buyerAge >= 18 && temPassagemComprada) {
    console.log("Boa viagem");
} else {
    console.log("Você não pode embarcar");
}

console.log(listDestionation);

