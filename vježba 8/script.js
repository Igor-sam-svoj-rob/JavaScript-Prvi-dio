const godina = 18;
//idemo provjeriti jeste li punoljetni
if(godina === 18) /*Možemo staviti if petlju ovako jer imamo samo jedan red.
Ako stavimo '18' onda će samo labavo biti točno*/
console.log('Punoljetna ste osoba! (strogo)');

/* ovo će biti točno jer su stvari potpuno identične*/

if('18' === 18)
console.log('punoljetna ste osoba!')    

/* ovo neće biti točno jer je jedno string a drugo broj, Javascripta neće u ovoj situaciji trostruke identičnosti napraviti prisilnu izmjenu (Coersion)*/

if('18' == 18)
console.log('punoljetna ste osoba! (labavo)')

/* ovo će biti točno jer će Javascripta napraviti prisilu da je String isti kao i broj*/


