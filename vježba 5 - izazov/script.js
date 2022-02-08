/* 
provjeri BMI (Body mass index) Marka i Josipa i utvrdi čiji je veći
Neka piše Markov koeficijent mase je veći od Josipovog koeficijenta mase ili
Josipov koeficijent mase je veći od Markovog koeficijenta mase
tip : koristite if else, koristite template string
*/

const massMarko = 78;
const heightMarko = 1.69;

const massJosip = 92;
const heightJosip = 1.95;

const bmiMarko = massMarko / heightMarko ** 2;
const bmiJosip = massJosip / heightJosip ** 2;

console.log(bmiMarko);
console.log(bmiJosip);

if (bmiMarko >= bmiJosip){
    console.log(`Markov koeficijent mase od ${bmiMarko} je veći od Josipovog koeficijenta mase od ${bmiJosip}`)
}
else{
    console.log(`Josipov koeficijent mase od ${bmiJosip} je veći od Markovog koeficijenta mase od ${bmiMarko}`)
}




