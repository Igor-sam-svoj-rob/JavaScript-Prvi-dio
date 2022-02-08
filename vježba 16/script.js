/*
za pisanje sigurnijeg koda. Lakše izbjeći greške. 
1. Strict mode ne dozvoljava određene stvari
2. javit će greške, koje inače Javascripta po defaultu neće prijaviti
*/

'use strict';

let imaVozackuDozvolu = false;
const prosaoVozackiIspit = true;

/* namjerno smo promašili imaVozackuDozvol kako bi demonstrirali strict 
(iskomentiraj strict pa ponovo pokreni. Nakon toga dopuni slovo u gdje fali*/

if (prosaoVozackiIspit) imaVozackuDozvol = true;
if (imaVozackuDozvolu) console.log('mogu voziti');


//interface, private je rezervirana riječ i strict ju neće dozvoliti
/*const interface = 'Audio';
const private = 534;
*/