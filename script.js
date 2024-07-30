console.log('JS OK')

/* 
Collegarsi al DOM e recuperare gli elementi
Dichiarare le variabili
Raccogliere i dati
Concatenazione stringhe
Produzione output
*/

const passwordGenerator = document.getElementById('password-generator');
console.log(passwordGenerator)

const randomNumber = 21;

const firstname = prompt('Qual è il tuo nome?', 'jacopo');
const lastname = prompt('Qual è il tuo cognome?', 'legovini');
const favoriteColor = prompt('Qual è il tuo colore preferito?', 'blue');

passwordGenerator.innerText = firstname + lastname + favoriteColor + randomNumber;

