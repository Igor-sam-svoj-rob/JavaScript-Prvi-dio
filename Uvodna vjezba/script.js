const js = "JS je suuuuper";
console.log(40 + 8 + 23 - 10);
console.log("Jožek");
console.log(23);

/*deklariranje varijable */

const ime = "Igor";

/* ispisivanje varijable u console log */

console.log(ime);

/* varijable ne mogu početi sa brojem, mogu sadržavati broj, slova, donju crtu*/

//const jozek& barica = "jb";
const jozek_barica = "jb";

/* postoje rezervirane riječi koje se koriste u JS-u i one ne smiju biti deklarirane 
kao varijable*/

const new = 28;
const function = 28;

/* AKO VAM je baš bitno, napišite _new ili _function*/

// Postoji 7 vrsta varijabli, od čega je nama bitno znati ovih 5

//brojevi (koriste se za decimale i cijele brojeve):
const dob = 23;

//string (tekstualna sekvenca, koristimo tekst, uvijek se stavljaju u kvačice, svejedno jednostruke ili dvostruke):
const imePrezime = "Igor Jevremović";

//Boolean može biti samo true ili false
const polaznik = true;

//Undefined, označavamo time varijablu kojoj još nismo dali/ne želimo dati još vrijednost
let brojPrisutnih;

// I imamo null, koji je isto kao i undefined prazna vrijednost, 
//ali je ipak definirana kao null a ne undefined, trenutno bitno je da znate da postoji

/* Idemo demonstrirati Boolean vrijednosti i kako se logaju i zapisuju, 
također pokazati kako let funkcionira, kada mijenjamo vrijednost varijabli
putem leta, kažemo da smo mutirali (mutate) vrijednost varijable*/

let javascriptJeZabavan = true;
console.log(javascriptJeZabavan);

/* idemo sada vidjeti specijalni operater typeof, spada u operatore 
kao što su +, - itd, znači operator koji pokazuje top vrijednosti */

console.log(typeof true);
console.log(typeof javascriptJeZabavan);
console.log(typeof 23);
console.log(typeof "Igor");

/* promijenimo vrijednost i vrstu varijable za javascriptJeZabavan */
javascriptJeZabavan = "promijenimo let";
console.log(typeof javascriptJeZabavan);

/* idemo sada pogledati kako izgleda undefined */

let godine;
console.log(godine);
console.log(typeof godine);

godine = 2022;
console.log(godine);
console.log(typeof godine);

/* Prikaz jednog buga, koji je jednostavno odlučeno da će ostati iako je već prilično star 
(iz nekih legacy razloga) */

console.log(typeof null); // trebao bi ispisati null, međutim, ispisati će object

/* Idemo sada detaljnije pogledati operatore (već smo gore pogledali typeof operator). 
Operator nam omogućuje da prenesemo ili kombiniramo više vrijednost. 
Matematički operatori, usporedni operatori, logički operatori itd*/

const godinaStarostiIgor = 2037 - 1991;
const godinaStarostiJosip = 2037 - 1988;
console.log(godinaStarostiIgor);
console.log(godinaStarostiJosip);

// možemo napisati sve u istoj liniji

console.log(godinaStarostiIgor, godinaStarostiJosip);

// no naravno, možemo i idemo napisati to na jednostavniji način

const starost = 2037;
const godinaStarostiIgor1 = starost - 1991;
const godinaStarostiJosip1 = starost - 1988;
console.log(godinaStarostiIgor1, godinaStarostiJosip1);
console.log(godinaStarostiIgor1 * 2, godinaStarostiIgor1 / 10);

/* Idemo spojiti 2 varijable */

const ime1 = "Igor";
const prezime1 = "Jevremović";

console.log(ime1 + prezime1); /* trenutno ovdje nemam razmaka... 
da bi tome doskočili možemo dodati prazno mjesto */

console.log(ime1 + " " + prezime1);

let x = 10 + 5; // ovdje znamo da je rezultat 15
x += 10; // ovo znači x = x + 10
x *= 4; // ovo znači x = x * 4
x++; // uvečat će za 1
x--; // umanjit će za 1
console.log(x);

/* usporedni operatori*/

console.log(godinaStarostiIgor1 > godinaStarostiJosip1); // postoji >, <, >=, <=
console.log(godinaStarostiIgor1 >= 18); // idemo provjeriti imam li više od 18

/* Iz ovoga možemo napraviti boolean varijablu */

const punoljetan = godinaStarostiIgor1 >= 18;
console.log(starost - 1991 > starost - 1988); // ista stvar kao što smo napisali na liniji 119

/*ajmo pogledati redoslijed izvođenja matematičkih funkcija - ovdje se nalazi cijela tablica :
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence */

const izracun = 65;
const darko = izracun - 60;
const stefica = izracun - 55;

console.log(izracun - 60 > izracun - 55);

/* idemo sada pokazati kako odjednom definirati dvije vrijednosti za jednu varijablu
 i istovremeno pokazati redoslijed izračuna*/

let y, z;

y = z = 25 - 10 - 5; /* oduzimanje ima veći precedence od znaka jednako i izvodi se sa lijeva na desno, 
što znači da će Javascripta pregledati ovu liniju, utvrditi da prvo mora izračunati oduzimanje 
sa lijeva na desno, a onda će tek pogledati znak jednako koji se pak kreće s desna na lijevo*/
console.log(y, z);

const prosjek = darko + stefica / 2 // da bi ovaj izračun bio točan, moramo dodati zagrade (darko + stefica)
console.log(darko, stefica, prosjek);

//Zadatak 1

const zemlja = "Hrvatska";
const kontinent = "Europa";
const populacija = "3.8 M";

console.log(zemlja, kontinent, populacija);

//Zadatak 2
const otok = false;
let jezik;

console.log(otok, populacija, zemlja, jezik);







