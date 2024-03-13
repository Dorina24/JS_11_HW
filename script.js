// Numere Pare și Impare: Scrie un program care afișează toate numerele pare de la 1 la 20 și toate numerele impare de la 1 la 20.
let numarPar = [];
let numarImpar = [];
for (let i=1; i<=20; i++)
{
    if(i%2 === 0)
    {numarPar.push(i); }
        else
        {numarImpar.push(i);}
}
console.log(`Numerele pare sunt ${numarPar}`);
console.log(`Numerele impare sunt: ${numarImpar}`);


//Verificare Număr Prim: Scrie un program care verifică dacă un numar este prim.

//0bs: Un număr prim este un număr natural, mai mare decât 1, care are exact doi divizori pozitivi: numărul 1 și numărul în sine.
//Cel mai mic număr prim este 2; în afară de 2 toate numerele prime sunt numere impare

let numarPrim = 81;
let prim = true;
for (let i=2; i <= Math.sqrt(numarPrim); i++)
    if(numarPrim%i === 0)
       {prim = false;
        break; }
if (prim)
{console.log(`Numarul ${numarPrim} este prim.`);}
            else
            {console.log(`Numarul ${numarPrim} nu este prim.`);}


//Suma Multiplilor de 3 și 5: Calculează suma tuturor numerelor întregi până la 100 care sunt multipli de 3 sau 5.
let suma = 0;
for(let i =1; i<100; i++)
{
    if(i%3===0 || i%5===0)
    {suma+=i;}
}
console.log(`Suma numerelor multipli de 3 sau 5 pana la 100 este ${suma}`);

//Afișarea Elementelor Șirului: Creează un șir cu câteva cuvinte și 
//folosește o buclă ‘for’ pentru a afișa fiecare cuvânt în consolă.
const sir = ['ploaie', 'ninsoare', 'lapovita', 'canicula', 'vijelie'];
console.log(`Cuvintele din sir sunt:`);
for (const cuvant of sir)
{console.log(cuvant);};

//Verificare Palindrom: Scrie un program care verifică dacă un cuvant 
//este un palindrom (se citește la fel de la stânga la dreapta și 
//de la dreapta la stânga, ignorând spațiile și diferențele de majuscule).
let palindrom = 's oroS';
palindrom = palindrom.toLowerCase().replace(/\s/g, ''); 
const cuvantInvers = palindrom.split('').reverse().join('');
const estePalindrom = `Cuvantul ${palindrom} este palindrom`;
const nuEstePalindrom = `Cuvantul ${palindrom} nu este palindrom` 
palindrom === cuvantInvers? console.log(estePalindrom): console.log(nuEstePalindrom);

//Calculează suma pătratelor numerelor de la 1 la 10.
let sumaPatratelor = 0;
for (let i = 1; i <= 10; i++) {
    sumaPatratelor += i * i;
}
console.log(`Suma pătratelor numerelor de la 1 la 10 este: ${sumaPatratelor}.`);

//Determinarea Parității: 
//Se da un array const nums = [1, 12, 30, 21]. Scrie un program care 
//afișează un mesaj care indică pentru fiecare număr din array dacă 
//numărul este par sau impar.

const nums = [1, 12, 30, 21]