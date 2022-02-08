"use strict";
//ovako bi napisali listu sa nekim osnovnim podacima.
const igorLista = [
  "Igor",
  "Jevremović",
  2022 - 1983,
  "SamSvojRob"[("Marko", "Luka", "Ivan")],
];

/* međutim, nemamo baš opciju zapisati neke stvari u recimo pripadajuće klase
/zato možemo koristiti objekte. Ovo je najlakši način za pisanje objekata.
ovako pisano sa vitičastim zagradama je tzv. object litelar sintaks.
najveća razlika između liste i objekta je što je za pozivanje objekta nebitan raspored
stvari iz liste pozivamo brojem, dok kod objekta ne moramo. */

const igor = {
  firstName: "Igor",
  lastName: "Jevremović",
  godine: 2022 - 1983,
  zanimanje: "SamSvojRob",
  prijatelji: ["Marko", "Luka", "Ivan"],
};
// Primjetit će te da je kod objekta nebitan raspored, jer će u consoli elemente ispisati po abecedi
console.log(igor);

//recimo da hoću ispisati svoje prezime. Mogu to napisati sa točkom (dot notacijom)

console.log(igor.lastName);

//ali mogu i sa zagradama (bracket notacija)

console.log(igor["lastName"]);

/* zašto bi to uopće tako radili... zato što time možemo napraviti spajanje 
više dijelova objekta sa konstantama koje sami odredimo */

const nameKey = "Name";
console.log(igor["first" + nameKey]);
console.log(igor["last" + nameKey]);

console.table(igor);

const upitnik = prompt(
  "Što vas zanima o Igoru? Izaberi između firstName, LastName, godine, zanimanje ili prijatelji"
);
// ovo ispod će izbaciti undefined, zato što dot notacija ne može izvući vrijednost koja ne postoji u objektu
//varijabla upitnik kao takav ne postoji u objektu
console.log(igor.upitnik);
//ali bracket notacija može ovu vrijednost izvući
console.log(igor[upitnik]);

if (igor[upitnik]) {
  console.log(igor[upitnik]);
} else {
  alert("Krivi upis!");
}

//Dodavanje novih elemenata u objekt
igor.lokacija = "Hrvatska";
igor["hobi"] = "ribolov";
console.log(igor);
