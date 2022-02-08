/*(PRVI BLOK) - izračun stoljeća rođenja - neće se izvrtiti jer stoljece nije definirano. 
(naravno, imamo samo 20-o i 21 stoljeće jer ne računamo da je netko rođen u 19-stoljeću još živ)
Let varijabla je objektna varijabla, ako ju definiramo unutar IF-ELSE blokova one neće biti van tih blokova.
Što znači da kada bi na kraju prvog zakomentiranog dijela izvan if else petlje napisali 
console.log dobili bi error
KADA BI UMJESTO LET NAPISALI VAR U IF ELSE CONSOLE LOG BI RADIO

const godRodjenja = 1983;
if (godRodjenja <= 2000){
    let stoljece = 20;
} else {
    let stoljece = 21;
}
console.log(stoljece);
*/

/*(DRUGI BLOK) - ispravan način pisanja prvog bloka (sve unutar if{} je jedan blok, unutar else{} je drugi blok*/

const godRodjenja = 1983;
let stoljece;

if (godRodjenja <= 2000){
    stoljece = 20;
} else {
    stoljece = 21;
}
console.log(stoljece);

/* Vježba if / else statements */

const hrvatska = 3.8e+6;
let prosjek;
if(hrvatska >= 33e+6){
    prosjek = `iznad prosjeka`;
}else{
    prosjek = `za ${33e+6 - hrvatska} ispod prosjeka`;
}

console.log(`Hrvatska populacija je ${prosjek}`);

