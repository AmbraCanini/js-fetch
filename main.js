
// primo esercizio 
// FETCH: invia una richiesta a un indirizzo esterno (API)
// In questo caso chiediamo di recuperare il post numero 5.
fetch('https://jsonplaceholder.typicode.com/posts/5')

    // THEN: viene eseguito quando la richiesta ha ricevuto una risposta.
    .then(response => response.json())
    // RESPONSE.JSON(): converte il contenuto della risposta
    // in dati JavaScript, che possiamo utilizzare nel nostro codice.

    // THEN: viene eseguito quando la conversione è terminata.
    .then(data => console.log(data));
// DATA: contiene i dati recuperati.
// CONSOLE.LOG(): stampa i dati nella console.