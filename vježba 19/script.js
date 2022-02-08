'use strict';


const IgorRođen = function (godinaRođenja) {
    return 2022 - godinaRođenja;
}

/* Arrow funkcija - i dalje izraz funkcije kao i ova gore, međutim brže ju možemo napisati, bez zagrada,
 drugi razlog jer se događa implicitno, za razliku od ovog gore gdje se događa eksplicitno (gore moramo napisati return, dolje ne moramo)*/
// Arrow funkcija - nakon => pišemo ono što želimo da se vrati (return)
// godinaRođenja => 1983 - godinaRođenja;

const AndrejRođen = godinaRođenja => 2022 - godinaRođenja;

const godinaRođenja1 = AndrejRođen(1988);
console.log(godinaRođenja1);

/* ajmo sada izračunati koliko godina imate do mirovine*/

/*kada imamo više linija ipak moramo koristiti return*/

/* OVO PRVO ODVRTI PA MAKNI DA TI DOLJNJI KOD RADI
const godineDoMirovine = godinaRođenja2 => {
    const godine = 2022 - godinaRođenja2;
    const mirovina = 65 - godine;
    return mirovina;
}

console.log(godineDoMirovine(1983));*/

/*što ako želimo više parametara upisati? onda upisujemo kod tako da godinu rođenja stavljamo u 
zagradu i dodajemo dodatne vrijednosti*/

const godineDoMirovine = (godinaRođenja2, imePrezime) => {
    const godine = 2022 - godinaRođenja2;
    const mirovina = 65 - godine;
    //    return mirovina;
    return `${imePrezime} će se umiroviti za ${mirovina} godina`;
}

console.log(godineDoMirovine(1983, 'Igor'));
console.log(godineDoMirovine(1988, 'Andreja'));

/*zašto se onda arrow funkcije ne koriste uvijek? Nemaju mogućnost korištenja This naredbe,
 a i kako se kontante dodaju tako ni oni više nisu jednostavni onelineri*/


/* Zadatak - recimo da imamo 7900 lovaca u Hrvatskoj. Izračunaj koji postotak tih lovaca
dolazi iz Središnje hrvatske - nazovimo const brojLovaca1 (3840 lovaca), 
iz SMZ brojLovaca2 (500 lovaca) i Dalmacije brojLovaca3 (1440 lovaca)

const brojLovaca = postotak => (postotak/7900) * 100;
    const brojLovaca1 = brojLovaca(3840);
    const brojLovaca2 = brojLovaca(500);
    const brojLovaca3 = brojLovaca(1440);

    console.log(brojLovaca1, brojLovaca2, brojLovaca3);

*/




