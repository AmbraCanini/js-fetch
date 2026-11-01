
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


//secondo esercizio Fetch: analisi della risposta HTTP e recupero dei dati.
// Invia una richiesta all'API per recuperare il post con ID 1
fetch("https://jsonplaceholder.typicode.com/posts/1")
    // Quando arriva la risposta del server, esegue questa funzione
    .then(response => {
        // Mostra il codice HTTP della risposta (es. 200)
        console.log(response.status);
        // Mostra true se la richiesta è andata a buon fine, false altrimenti
        console.log(response.ok);
        // Mostra il tipo di contenuto restituito dal server (es. application/json)
        console.log(response.headers.get('Content-Type'));
        // Converte il contenuto della risposta in dati JavaScript
        // e li passa al successivo .then()
        return response.json();
    }
    )
    // Riceve i dati convertiti e li stampa nella console
    .then(data => console.log(data));