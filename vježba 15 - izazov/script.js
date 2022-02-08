/* 
Joža želi izraditi jednostavan kalkulator za napojnice. U njegovoj zemlji uobičajeno je
dati 15% za napojnicu ako je račun između 50 i 300. Ako je vrijednost drugačija onda je
napojnica 20%..

Vaš zadatak je izračunati napojnicu ovisno o veličini računa. Napravi varijablu racun za
tu potrebu. Nije dozvoljeno koristiti if else, nego kondicionalni operator.

ispiši string u konzolu sa iznosom računa, i finalnim izračunom (račun + napojnica)

test data:

račun 275
račun 40
račun 430
*/
const racun = 275; 

const ukupno = racun >= 50 && racun <= 300 ? `račun je ${racun}, napojnica je ${racun * 0.15} a ukupno je ${racun + racun * 0.15}` : `račun je ${racun}, napojnica je ${racun * 0.2} a ukupno je ${racun + racun * 0.2}`;
console.log(ukupno);

const napojnica = racun <= 300 && racun >= 50 ? racun * 0.15 : racun * 0.2;
console.log(`Račun je ${racun}, napojnica je ${napojnica}, a ukupna vrijednost je ${racun + napojnica}`);
