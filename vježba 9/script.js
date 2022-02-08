/*idemo upisati broj, i provjeriti sa equality operatorima 
Ovaj dio prvo napiši do idućeg komentara

const broj = prompt ('Koji ti je najdraži broj?');
console.log(broj);
console.log(typeof broj); //ovo je string, idemo to i pokazati

if(broj == 23){                           //isto odvrti sa ===
    console.log('Broj 23 je super');
}
*/
/* iskomentiraj sve ovo gore za nastavak i ispiši ovo zakomentirano ------
Međutim ako upišemo prvo Number converter, ovo će biti broj
const broj = Number(prompt ('Koji ti je najdraži broj?'));
console.log(broj);
console.log(typeof broj);

if(broj === 23){//naravno ako upišete 22 u input, ovo će opet biti false
    console.log('Broj 23 je super');
} */

//Nakon toga dodaj else if iz koda dolje kako bi ispisali različite povratne informacije
const broj = Number(prompt ('Koji ti je najdraži broj?'));
console.log(broj);
console.log(typeof broj);

if(broj === 23){
    console.log('Broj 23 je super');
}else if (broj === 7){
        console.log('I 7 je dobar broj');
}else{
    console.log('nemate dobrih brojeva');
}

/* ELSE IF možete nebrojeno puta koristiti */

if (broj !== 23) console.log('zašto ne 23?');//idemo vidjeti sa !== znači različito od 23

/* Zadatak Equality operators */

const brojSusjeda = Number(prompt ('Koliko susjeda ima Hrvatska?'));
console.log(brojSusjeda);
console.log(typeof brojSusjeda);

if(brojSusjeda == 1){
    console.log('Hrvatska ima samo jednog susjeda')
}else if(brojSusjeda >= 1){
    console.log('Hrvatska ima više od jednog susjeda')
}else if(brojSusjeda == 0){
    console.log('Hrvatska nema susjeda')
}


