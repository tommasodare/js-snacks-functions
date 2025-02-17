/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function nameByLetter (name, letter) {
    const myname = names.startsWith("A")
    console.log(myname);
}

// Invoca la funzione qui e stampa il risultato in console
nameByLetter()


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]