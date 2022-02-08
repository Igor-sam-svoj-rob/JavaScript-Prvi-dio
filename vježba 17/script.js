'use strict';
/* FUNKCIJE - slične varijablama, međutim definiramo ih na sasvim drugačiji način*/

function logger() {
    console.log('Zovem se Igor');
}
/* ovo ispod je calling / running / invoking a function, executing a function*/

logger();
logger();
logger();
logger();

/* dobra analogija za objasniti funkciju je da je to stroj, nutri bullet. Ubacimo voće,
 on napravi obradu tog voća i vrati nam sok*/

/* unutar zagrada stavljamo parametre funkcije, jabuke i naranče su parametri*/
function nutriBullet(jabuke, naranče){
    console.log(jabuke, naranče);
    const sok = `Sok od ${jabuke} jabuka i ${naranče} naranči`;
    return sok;//return završava izvršavanje funkcije i specificira vrijednost koja se treba vratiti u funkciju
}

nutriBullet (5, 0);// one idu u parametre funkcije, koji tek sada dobivaju konkretnu vrijednost. 
//Ovo u zagradama su ARGUMENTI

//ajmo sada od ovoga napraviti varijablu
const sokOdJabuka = nutriBullet (5, 0);
console.log(sokOdJabuka);

/* ajmo sada koristeći istu funkciju napraviti novi sok */

const sokJabukaNaranca = nutriBullet (2, 4);
console.log(sokJabukaNaranca);

/* sa funkcijama spriječavate repeticiju, puno ponavljanja pisanja... 
DRY concept - Don't repeat Yourself, keep your code DRY*/

/* ovo je isto funkcija, ako želimo vidjeti što je zapisala, upišem num u konzoli Chromea*/
const num = Number('23');

/* Zadatak:
Napiši funkciju opisZemlje sa 3 parametra : zemlja, populacija i glavniGrad.
Bazirano na inputu funkcija treba vratiti string u ovom formatu : 'Zagreb ima 1.5 M stanovnika i glavni je grad
Hrvatska.
Pozovi ovu funkciju 3 puta, sa podacima 3 različite zemlje. Spremi return value u 3 različite varijable i
logaj ih u consolu
*/

/*
function opisZemlje(zemlja, populacija, glavniGrad){
    return `${zemlja} ima ${populacija} M stanovnika i glavni je grad ${glavniGrad}`;
}

const hrvatska = opisZemlje('Hrvatska', 3.8e+6, 'Zagreb');
const slovenija = opisZemlje('Slovenija', 2e+6, 'Ljubljana');
const bih = opisZemlje('BIH', 3.4e+6, 'Sarajevo');

console.log(hrvatska);
console.log(slovenija);
console.log(bih);*/
