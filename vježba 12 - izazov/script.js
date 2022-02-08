/* 
Real i Barca (košarka) su odigrali 3 tekme međusobno. Pobjednik je onaj koji ima veći
prosjek koševa u 3 tekme. Izračunaj prosječni rezultat svake ekipe i onda međusobno usporedi
Uzmi u obzir da je moguć jednak rezultat, usporedi rezultate i na tu mogućnost.

Bonus opcija : uključi dodatni uvjet, da je minimalan rezultat 100. Sa tom opcijom tim
pobjeđuje samo ako ima više poena od protivnika i ako je postigao više od 100 koševa.

Bonus opcija 2 : Minimalan rezultat se također primjenjuje za izjednačeni rezultat i da
obje ekipe imaju preko 100 koševa. Inače nitko ne pobjeđuje.

Testni podaci : 
Barca : 96, 108, 89
Real : 88, 91, 110

test podaci B : 
Barca : 97, 112, 101
Real : 109, 95, 123

test podaci C :
Barca 97, 112, 101
Real 109 95 106

*/
const prosjekBarca = (96 + 108 + 89) / 3;
const prosjekReal = (88 + 91 + 110) / 3;
console.log(prosjekBarca, prosjekReal);


if (prosjekBarca > prosjekReal){
    console.log('Barca je pobijedila 🏆');
}else if(prosjekReal > prosjekBarca){
    console.log('Real je pobijedio 🏆');
}else if(prosjekBarca === prosjekReal){
    console.log('oboje su pobjednici');
}
/*
if (prosjekBarca > prosjekReal && prosjekBarca >= 100){
    console.log(`Barcelona je pobijedila 🏆`);
}else if (prosjekReal > prosjekBarca && prosjekReal >= 100){
    console.log(`Real je pobijedio 🏆`);
}else if(prosjekReal === prosjekBarca && prosjekReal >= 100 && prosjekBarca >=100){
    console.log(`Oboje su pobjednici 🏆`);
}else{
    console.log(`Nema pobjednika`); 
}

*/

