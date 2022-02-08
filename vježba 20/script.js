'use strict';

/* Funkcija unutar funkcije. Prvo ćemo voće narezati na 4 komada. I onda ćemo tako ubaciti
u NutriBullet */
function komadiHrane(voce) {
    return voce * 4;
}

function nutriBullet(jabuke, naranče) {
    const komadiJabuke = komadiHrane(jabuke);
    const komadiNaranče = komadiHrane(naranče);

    const sok = `Sok od ${komadiJabuke} komada jabuka i ${komadiNaranče} komada naranči`;
    return sok;
}

//nutriBullet(2, 3);

console.log(nutriBullet(2, 3));

/* Zadatak - Na svijetu ima 10000 profesionalnih igrača stolnog tenisa. Hrvatska ima 10,
Kina 3441 i USA 332. Izračunajte postotak tih igrača u odnosu na sve profesionalne igrače
i onda ih i ispišite, na način da definirate dvije funkcije, prvu koja će računati postotak
i drugu u koju ćemo ubaciti taj postotak i koja će imati 2 parametra - zemlja i populacija.
Nakon toga ispišite sve 3 vrijednosti koristeći rečenicu:
`${zemlja} ima ${populacija} lovaca što je oko ${postotak}% svijeta`

const postotakSvijeta = function (populacija){
    return (populacija / 1000) * 100;
}

const opisZemlje = function (zemlja, populacija){
    const postotak = postotakSvijeta(populacija);
    const opis = `${zemlja} ima ${populacija} lovaca što je oko ${postotak}% svijeta`;
    console.log(opis);
}

opisZemlje ('Hrvatska', 10);
opisZemlje ('Kina', 3441);
opisZemlje ('USA', 332);
*/