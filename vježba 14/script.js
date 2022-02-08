 //3+4 je npr. expression jer će proizvesti određenu vrijednost.
 // 1991 je isto expression
 //true && false && !false je isto expression
 //if else je statement (deklaracija), switch isto. On u biti ne proizvodi vrijednost.
 // deklaracije su kao kompletne rečenice, expressioni su riječi koji čine rečenicu. Statementi su sekvence akcija (if else je statement)

 const godine = 23;
 // godine >= 18 ? console.log('možeš cugat') : console.log('nemoš cugat'); 
 //kondicionalni operator (drugačiji način pisanja if-else), pisanje u jednoj liniji

const punoljetan = godine >= 18 ? 'moš pit' : 'nemoš pit';
console.log(punoljetan);

//ovaj kondicional bi sa if else napisali ovako:

let punoljetan2;

if (godine >= 18){
    punoljetan2 = 'moš pit';
}else{
    punoljetan2 = 'nemoš pit';
}
console.log(punoljetan2);

//za razliku od od if elsea koji je deklaracija, kondicionalni operater daje vrijednost
//stoga ga možemo ubaciti u template literal

console.log(`mogu li piti? ${godine >= 18 ? 'moš pit' : 'nemoš pit'}`);
