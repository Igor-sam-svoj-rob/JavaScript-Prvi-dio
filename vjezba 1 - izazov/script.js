/*
 Izračunaj BMI (Boddy mass index) Marka i Josipa, ispiši ih,
  i provjeri boolean vrijednost true/false jel Markov BMI veći od Josipovog)

  računa se tako da se masa dijeli sa visinom na kvadrat (formula je bmi = mass/height ** 2)
  test data 1 Marko je težak 78 kg i visok 1.69, Josip 92 kg i 1.95
  test data 2 Marko je težak 95 kg i visok 1.88,  Josip 85 kg i 1.76
*/

const massMarko = 78;
const heightMarko = 1.69;

const massJosip = 92;
const heightJosip = 1.95;

const bmiMarko = massMarko / heightMarko ** 2;
const bmiJosip = massJosip / heightJosip ** 2;
const markoHigherBMI = bmiMarko > bmiJosip;
console.log(bmiMarko, bmiJosip, markoHigherBMI);




