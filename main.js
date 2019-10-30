//- Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
//Stampare a schermo attraverso il for in tutte le proprietà.
//- Creare un array di oggetti di studenti.
//Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
//- Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo ////nell’ordine: nome, cognome e età.

//creo un oggetto che descriva uno studente

var studente = {
  "nome" : "Bart",
  "cognome" : "Simpson",
  "età" : "13 anni",
}
//Stampare tutte le proprietà con il for

for (var key in studente) {
  console.log(studente[key])
}

//creo array di oggetti studente
