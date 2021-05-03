// Consegna:
// 1. chiedi all'utente il cognome
// 2. inseriscilo in un array con altri cognomi: 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova


// Chiedo il cognome
var cognome = prompt("inserisci qui il tuo cognome")

// PER RENDERE LA PRIMA LETTERA MAIUSCOLA E IL RESTO MINUSCOLO
cognome = cognome.toLocaleLowerCase();
var primaLettera = cognome[0].toUpperCase();

cognome = primaLettera + cognome.slice(1);

// lista cognomi
var listaCognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
console.log(listaCognomi);

// inserimento variabile nell'array
listaCognomi.push(cognome);

// ordinamento
listaCognomi.sort();
posizione = listaCognomi.indexOf(cognome);

// Stamp in posizione js
console.log("Posizione JS" , posizione);
// Stamp in posizione umana
var posizioneUmana = posizione + 1;
console.log("Posizione Umana" , posizioneUmana);