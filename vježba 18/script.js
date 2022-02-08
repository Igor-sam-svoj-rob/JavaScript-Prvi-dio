'use strict';
/* ovo možemo ovako napisati, ali postoji puno jednostavniji način, onaj koji ide ispod ovog
function izracunGod(godRodjenja){
    const dob= 2021 - godRodjenja;
    return dob;
}*/
/* ovo je deklaracija funkcije, može se pozvati prije nego se deklarira*/
function izracunGodina1(godinaRođenja) {
    return 2022 - godinaRođenja;
}
//pozovimo sad funkciju i odmah ju spremimo u konstantu
const IgorRođen = izracunGodina1(1983);

/*ajmo sada napraviti function expresion (izraz funkcije), gore smo pokazali deklaraciju funkcije.
U biti vrijednost funkcije spremamo odmah u varijablu - funkciji ovako ne dajemo ime, ona postaje anonimna
funkcija i odmah se sprema u varijablu*/

const izracun = function izracunGodina1(godinaRođenja) {
    return 2022 - godinaRođenja;
}

const MatijaRođen = izracunGodina1(2015);

console.log(IgorRođen, MatijaRođen);

/* Zadatak - recimo da imamo 1000 lovaca u Hrvatskoj. Izračunaj koji postotak tih lovaca
dolazi iz Središnje hrvatske - nazovimo const brojLovaca1 (340 lovaca), 
iz SMZ brojLovaca2 (50 lovaca) i Dalmacije brojLovaca3 (140 lovaca)

function postotak (brojLovaca){
    return (brojLovaca / 1000) * 100;
}

const brojLovaca1 = postotak(340);
const brojLovaca2 = postotak(50);
const brojLovaca3 = postotak(140);

console.log(brojLovaca1, brojLovaca2, brojLovaca3);
*/
