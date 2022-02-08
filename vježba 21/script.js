"use strict";

//kako zakomentirani kod ispod pretvoriti iz arrow u funkciju? Obrisati strelicu i dodati function prije parametara
/* const godineDoMirovine = (godinaRođenja2, imePrezime) => {
  const godine = 2022 - godinaRođenja2;
  const mirovina = 65 - godine;
  return `${imePrezime} će se umiroviti za ${mirovina} godina`;
}; */

const izracunGodina = function (godinaRođenja) {
  return 2022 - godinaRođenja;
};

//ovdje smo ubacili if u funkciju
const godineDoMirovine = function (godinaRođenja, imePrezime) {
  const godine = izracunGodina(godinaRođenja);
  const mirovina = 65 - godine;
  if (mirovina > 0) {
    console.log(`${imePrezime} će se umiroviti za ${mirovina} godina`);
    return mirovina;
    /* ako console log stavite poslije returna, neće se odvrtiti, jer return odmah nakon
 što se odvrti zatvara funkciju. Ako želimo da se pojavi consola, moramo staviti console.log
 prije returna. Zašto će se vidjeti? Zato što je u ovom slučaju, dok ta priča dođe do returna, 
 mirovina već je izračunata*/
  } else {
    return -1;
  }
};

console.log(godineDoMirovine(1983, "Igor"));
console.log(godineDoMirovine(1950, "Andreja"));
