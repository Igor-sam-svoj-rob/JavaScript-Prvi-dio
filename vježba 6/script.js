/* type conversion */

const inputGodina = '1991';
console.log(inputGodina + 18);
//console.log(Number(inputGodina));
//console.log(Number(inputGodina), inputGodina); 
/*prvo napiši kod iznad i pokreni. ispis će biti 19918
s obzirom da input nije broj nego string, treba prvo konvertirati string u broj sa Number funkcijom, 
pa odkomentiraj prvu liniju i onda pokreni*/


/* ako probate dati vrijednost broja varijabli koja nije broj (primjer ispod), dobijete NaN u logu (Not a Number)*/

console.log(Number('Igor'));
/* čisto primjera radi, ovo ide i u drugom smjeru, možete broj pretvoriti u string */
console.log(String(23));
//console.log(String(23), 23);

/* type coercion (coercion je prisila u prijevodu), sjećate se da smo ovo već pisali?
Kada god se broj ovako nađe u stringu, automatski postane dio stringa i više nije broj */

console.log('Ja imam ' + 23 + ' godine');

/* Kada JavaScripta ne bi imala automatsku mogućnost prisile izmjene vrijednosti, morali bi pisati slijedeće*/

//console.log('Ja imam ' + String(23) + ' godine');

/*još jedan primjer */
console.log('23' - '10' - 3); //ovo funkcionira jer oduzimanje u ovoj varijanti prepoznaje da su ovo brojevi
console.log('23' + '10' + 3); // + u ovoj varijanti ne funkcionira jer se smatra dijelom Stringa,
console.log('23' * '2'); // dok sve ostale operacije ne mogu biti ništa drugo nego matematičke stoga "RADE"



/* da li će ovaj kod napraviti izračun, napiši sve skupa do console.log(n); i onda analiziraj liniju po liniju */

let n= '1' + 1; /* neće, zato što će ovo napraviti string vrijednosti 11 - 1 
string kojem će se sa desne strane dodati broj 1*/
n = n - 1; /* i onda će ovo biti 10 */
console.log(n);

let m= 2 + 3 + 4 + '5'; /* ovo će biti 95 jer je 2 + 3 + 4 = 9 i na kraju će se dodati string 5*/   
console.log(m);

let z= '10' - '4' - '3' - 2 + '5'; //izračun do +5 će biti 1, i onda po gore navedenoj logici bude 15
console.log(z);

/* Zadatak Conversion and Coercion

imaš ga u skripti jednostavan je, samo prepiši

*/