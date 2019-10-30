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

var studenti = [
      {
          "nome" : "Bart",
          "cognome": "Simpson",
          "eta": 13

      },
      {
          "nome": "Lisa",
          "cognome": "Simpson2",
          "eta": 14

      },
      {
          "nome": "Nelson",
          "cognome": "Mandela",
          "eta": 15

      }
     ]



  for (var i = 0; i < studenti.length; i++) {

      console.log(studenti[i].nome + " " +  studenti[i].cognome);



  }
//- Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo ////nell’ordine: nome, cognome e età

  var neostudente = {}

  var nomeInput = prompt("inserisci il nome dell'utente");
  var cognomeInput = prompt("inserisci il cognome dell'utente");
  var etaInput = prompt("inserisci l'età dell'utente");

  neostudente.nome= nomeInput;
  neostudente.cognome= cognomeInput;
  neostudente.età= etaInput;

  console.log("lo studente neofita è:" , neostudente);
