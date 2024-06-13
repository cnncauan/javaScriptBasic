console.log(`Working with list`);

const listDestionation = new Array(
    `Messejana`,
    `Parquelândia`,
    `Barroso`
);

listDestionation.push(`Curió`);

console.log("possible destation");
console.log(listDestionation);

listDestionation.splice(1, 1);
console.log(listDestionation[1]);