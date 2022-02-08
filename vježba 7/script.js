/* falsy values : 0, '', undefined, null, NaN - vrijednosti koje nisu netočne, ali će postati 
kada se pretvore u Boolean vrijednosti */

console.log(Boolean(0)); //Boolean ima vrijednost 0 i 1
console.log(Boolean(undefined)); //kada je undefined onda je netočno
console.log(Boolean('Marko')); //svaki string koji nije prazan je truthy
console.log(Boolean({})); //objekt će izbaciti truthy
console.log(Boolean('')); //objekt će izbaciti false jer je prazan string

/* ovo nećete sretati u praksi, Boolean vrijednosti se definiraju implicitno, 
ne eksplicitno kao ovdje, to uvijek odrađuje Javascripta prisilom (Coersion) */


/* novac varijablu će Javascripta automatski probat pretvoriti u Boolean 
i zato će izbaciti drugu rečenicu */

const novac = 0;
if(novac){// novac je po onoj prvoj linij gore falsy i izvršiti će else statement, 
    console.log("Nemojte sve potrošiti odmah!")
}
else{//ako promijenimo novac u bilo koji broj, ispisat će if rečenicu
    console.log("Nađi si posao!")
}

let visina; //ispisat će else jer je falsy, jer je undefined kao što vidimo gore
if(visina){
    console.log("Jej, imamo visinu!")
}else{
    console.log("nemamo definiranu visinu!")
}
