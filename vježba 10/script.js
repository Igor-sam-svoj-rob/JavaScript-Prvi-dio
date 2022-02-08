//pustiti video Boolean logic sa Udemya, broj 23

const imaVozackuDozvolu = true;
const dobarVid = false;

console.log(imaVozackuDozvolu && dobarVid); // and operator &&
console.log(imaVozackuDozvolu || dobarVid); // or operator ||
console.log(!imaVozackuDozvolu); //okrenite true u false vrijednost ili false u true

const mozeVoziti = imaVozackuDozvolu && dobarVid;

if (mozeVoziti){
    console.log('Osoba može voziti.');
}else{
    console.log('Osoba ne može voziti');
}

const umoran = true;
console.log(imaVozackuDozvolu || dobarVid || umoran);

/* 
primjer za not ćemo pokazati malo kasnije.... nalazi se u vježbi 11
*/


//Zadatak Logical operators - zamislimo da želimo živjeti u zemlji u kojoj se priča
//engleski, koja ima manje od 50 m stanovnika i koja nije otok.
//Utvrdi da li Hrvatska ispunjava te uvjete i ako da ispiši Zemlja u kojoj želite
//živjeti je Hrvatska. Ako ne, onda ispiši Hrvatska nije za vas.

/* 

const engleski = true;
const manjeOd50M = true;
const nijeOtok = true;
const hrvatska = false;


const uvjeti = engleski && manjeOd50M && nijeOtok;
const zelje = hrvatska && manjeOd50M && nijeOtok;

if(uvjeti === zelje){
    console.log('Zemlja u kojoj želite živjeti je Hrvatska')
}else{
    console.log('Hrvatska nije za vas')
}

*/
