"use strict";

//idemo pokazati Array Methods, prvo ćemo napraviti push metodu koja dodaje element na kraj arraya
const prijatelji = ["Stjepan", "Josip", "Marko"];

prijatelji.push("Matija");

console.log(prijatelji);

//ajmo sada dodati unshift metodom koja dodaje element na početak array
prijatelji.unshift("Luka");

console.log(prijatelji);

//ajmo sada ukloniti pop metodom zadnji element iz arraya

prijatelji.pop();

console.log(prijatelji);

//idemo maknuti prvi element iz arraya metodom shift

prijatelji.shift();

console.log(prijatelji);

/*postoji način da provjerim na kojem mjestu se nalazi određeni član arraya, a i da li je
opće član arraya metodom indexOf (taj će dobiti vrijednost -1 u logu)*/
// ovo je ES 5 metoda
console.log(prijatelji.indexOf("Josip"));
console.log(prijatelji.indexOf("Štef"));

//ES 6 metoda, includes je boolean provjera

console.log(prijatelji.includes("Stjepan"));
console.log(prijatelji.includes("Štef"));

//bolja je zato što možemo raditi testove
if (prijatelji.includes("Stjepan")) {
  console.log("Imate prijatelja koji se zove Stjepan");
}
