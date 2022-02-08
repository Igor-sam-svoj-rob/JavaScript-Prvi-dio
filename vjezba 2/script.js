const ime = "Igor";
const posao = "učitelj";
const godinaRodjenja = 1983;
const godina = 2022;

const algebra = "Ja sam " + ime +", " + (godina - godinaRodjenja) +"-godišnji " + posao + "!";
console.log(algebra);

/* idemo sada ovo napisati kao template literal (ako nađete prijevod za ovo javite :D), 
template literals su uvedeni sa ES6 verzijom,otvaraju se sa ` znakom, tzv. backtick
$ime povlači vrijednost sa ime, a $ godina - godinaRodjenja nije problem, jer
Javascripta razumije da je unutra matematička formula
Realno možete koristiti stalno backtickove, da ne razmišljate o tome kada morate imati "" a kada ``
*/

const algebraNovo = `Ja sam ${ime}, ${godina - godinaRodjenja}-godišnji ${posao}!`;
console.log(algebraNovo);

//primjer zašto je također zgodno

console.log("String sa\n\
više\n\
linija")

console.log(`
    Više
    linija
    ima
    ovaj
    redak`
    )


// Zadatak String and template literals - napišite koristeći template literal : Hrvatska ima 3.8m stanovnika
// i nalazi se u Europi

const zemlja = "Hrvatska";
const kontinent = "Europi";
const populacija = 3.8e+6;

console.log(`${zemlja} ima ${populacija} stanovnika i nalazi se u ${kontinent}`)

