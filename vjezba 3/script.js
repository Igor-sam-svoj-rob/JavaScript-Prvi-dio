/* (PRVI BLOK) idemo provjeriti jesi li punoljetan */
const godina = 19;
const punoljetan = godina >= 18;

/* Ajmo sada provjeriti to sa if petljom */
if (punoljetan){
    console.log('Možete polagati vozačku dozvolu 🚗') //za autić tipka je windows tipka i točka
}

/* (DRUGI BLOK) skraćeni način pisanja prvog bloka*/

if (godina >= 18){
    console.log('Možete polagati vozačku dozvolu 🚗')
}

/* pisanje tog istog gore bloka sa else varijablom
 jer prva varijanta neće ništa ispisati ako je if tvrdnja netočna*/

const godinaManja = 15;

if(godinaManja >= 18){
    console.log('Možete polagati vozačku dozvolu 🚗')
}
else{
    console.log('Niste dovoljno stari za vožnju')
}

/* pisanje sa else varijablom i dodatnim kodom. To se zove if-else control structure*/

const godManja = 15;

if(godManja >= 18){
    console.log('Možete polagati vozačku dozvolu 🚗')
}
else{
    const yearsLeft = 18 - godManja;
    console.log(`Niste dovoljno stari za vožnju. Trebate čekati još ${yearsLeft} godine`);
}