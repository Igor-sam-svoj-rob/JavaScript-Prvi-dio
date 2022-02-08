"use strict";

/*izrada Arraya - naša prva data struktura (koja je ujedno i vrsta objekta, koje ćemo kasnije danas raditi)
Recimo da želim spremiti par prijatelja u neku listu
*/
/* umjesto da pišemo:
const frend1 = 'Igor';
const frend1 = 'Petar';
const frend1 = 'Davor'; */

const friends = ["Igor", "Petar", "Davor"];
//ako želimo staviti brojeve u array, možemo to napraviti na slijedeći način (mora pisati new Array)
const years = new Array(1992, 1993, 1995);
console.log(friends);
/*kada želimo određenog člana iz arraya, onda ga upišemo u [] zagrade*/
console.log(friends[0]);
console.log(friends[2]);
/*kada želimo znati koliko ima članova u arrayu onda upišemo .length iza konstante*/
console.log(friends.length);
/*ako hoćemo npr. dobiti zadnji element arraya, isto kao kada tražimo određenog člana
arraya, umjesto 0, 1 ili 2 pišemo jednadžbu*/
console.log(friends[friends.length - 1]);

//recimo da više ne želim bit frend sa Petrom i hoću ga zamijenit sa Jožom
friends[1] = "Joža";
console.log(friends);

/*Vrijednost const se ne može mijenjati na tzv. primitivnim vrijednostima. 
Array nije primitivna vrijednost. Ono što ne možemo je promijeniti cijeli Array npr.
friends = ['Bob', 'Steve']*/

//Ajmo sada napisati jedan česti primjer Arraya. Array sa podacima o osobi i na kraju
//možemo staviti i array iz prijašnjeg primjera

//const Igor = ['Igor', 'Jevremović', 2022-1983,'Sam svoj rob', friends];

//možemo umjesto imena napisati :
const ime = "Igor";
const igor = [ime, "Jevremović", 2022 - 1983, "Sam svoj rob", friends];
console.log(igor);

/* Zadatak*/
const izracunGodina = function (godinaRođenja) {
  return 2022 - godinaRođenja;
};

const godine = [1990, 1967, 1983, 2002, 2005];

// ne možemo napraviti izracunGodina(godine) - jer će funkcija gore očekivati broj a ne array
// ali možemo koristiti određene članove arraya i ubaciti ih u izračun

const stjepan = izracunGodina(godine[0]);
const luka = izracunGodina(godine[1]);
const ivan = izracunGodina(godine[godine.length - 1]);

console.log(stjepan, luka, ivan);
//ajmo sada ove podatke staviti u novi array :
const dob = [
  izracunGodina(godine[0]),
  izracunGodina(godine[1]),
  izracunGodina(godine[godine.length - 1]),
];
console.log(dob);
