var issoEumaString = "Isso é uma String"
let issoEumNumero = 42;
const issoEumBooleano = true;
let issoTambemEumaString = "42"
if (issoEumNumero === issoTambemEumaString) {
    console.log("As strings são iguais");
} else {
    console.log("As strings são diferentes");
}
console.log(issoEumNumero + issoTambemEumaString);
console.log(issoEumNumero + issoEumNumero);


var issoEumaGlobal = "Eu sou uma variável global"

{
    let IssoEumalocal = "Isso é uma variável local"
    console.log(issoEumaGlobal);
    console.log(IssoEumalocal); 
}

 console.log(issoEumaGlobal);
 //console.log(IssoEumalocal); //Isso causará um erro, pois a variável IssoEumaLocal não está definido fora do bloco

 let floatvaluel = 0.06;
 let flotvalue2 = 0.01;
 let sum = floatvaluel + flotvalue2;

 console.log(sum.toPrecision(2)) //Isso pode resultar em 0.070000000001 devido à precisão dos números de ponto fltuante

 for (let i = 0; i <5; i++) {
    console.log(i);
    console.log(i*2);
 }

let j = 0;
while (j < 5) {
    console.log(j*2+1);
    j++;

}

//Numeros primos de 0 a 100
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i === 0) return false;
}
return true;

for (let i = 1; i <= 100; i++) {
    isPrime ? console.log(i) : null;
}
 
