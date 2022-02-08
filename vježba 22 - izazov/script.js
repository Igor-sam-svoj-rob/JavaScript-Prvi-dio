"use strict";
/* imamo 2 tima, koji su se takmičili 3 puta. prosjek 3 utakmice treba izračunati. 
Tim pobjeđuje jedino ako ima duplo više bodova od drugog tima.
Napravite arrow funkciju kako bi napravili kalkulaciju prosjeka. 
Uz pomoć te arrow funkcije onda izračunajte prosjek za svaku ekipu.
Napravite funkciju koja uzima prosjek ekipa i ispisuje pobjednika u konzoli skupa sa brojem bodova
npr. Real pobjeđuju 112 naprema 85.
primjer 1: Real rezultati 112, 89, 95, Barcelona 85, 108, 98.
primjer 2: Real rezultati 103, 102, 101 Barcelona 83, 82, 81. (KADA RJEŠTE SVE NEKOMENTIRANO
 promijenite const scoreReal i ScoreBarcelona u let na liniji 18 i 19 kako bi radio TEST 2)

hint 1: za prosjek zbrojite ih pa podijelite sa 3
hint 2: kako bi provjerili da li je jedan tim pobijedio drugi sa barem duplo bodova, možete napraviti provjeru
koristeći formulu A >= B * 2. Primjenite to na prosječne rezultate*/

const calcAverage = (a, b, c) => (a + b + c) / 3;
/* calcAverage ispod se ubacuje u gornju jednadžbu*/
const scoreReal = calcAverage(112, 89, 95);
const scoreBarcelona = calcAverage(85, 108, 98);
console.log(scoreReal, scoreBarcelona);

const checkWinner = function (avgReal, avgBarcelona) {
  if (avgReal >= 2 * avgBarcelona) {
    console.log(`Real pobjeđuje (${avgReal} protiv ${avgBarcelona})`);
  } else if (avgBarcelona >= 2 * avgReal) {
    console.log(`Barca pobjeđuje ${avgBarcelona} protiv ${avgReal}`);
  } else {
    console.log(`Nema pobjednika`);
  }
};
/*scoreReal svoju vrijednost daje u avgReal, a scoreBarcelona u avgBarcelona*/
checkWinner(scoreReal, scoreBarcelona);

checkWinner(576, 111); //ova funckija je potpuno neovisna o scoreReal i scoreBarcelona vrijednostima

/* TEST 2
scoreReal = calcAverage(85, 54, 41);
scoreBarcelona = calcAverage(23, 34, 27);
checkWinner(scoreReal, scoreBarcelona);*/
