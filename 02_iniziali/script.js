/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
console.log(names);


// Dichiara la funzione qui.
function getInitial() {
    for (let index = 0; index < names.length; index++) {
    const myNames = names[index];
    const firstLetter = myNames.charAt(0)

    const newArray = firstLetter.push()
    console.log(newArray);
}
}

// Invoca la funzione qui e stampa il risultato in console
getInitial()


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]