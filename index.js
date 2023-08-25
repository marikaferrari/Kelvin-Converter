/* Per convertire la temperatura da Kelvin a Celsius:
1. Creare una costante per l'input;
2. Creare una costante per l'output;
3. Creare una funzione che faccia il calcolo e che arrotondi il numero;
4. 
*/

const kelvinInput = document.querySelector("#input"); //constante per l'input

const celsiusOutput = document.querySelector("#celsius"); //costante per l'output

function temperature() {
   const kelvin = parseFloat(kelvinInput.value); /*nella variabile "kelvin", il method "parseFloat" serve per convertire
   la stringa/testo in un numero, dato che l'input dell'user sara un testo ma a noi serve numero 
   Invece la proprieta ".value" ti riporta quello che hai inserito come input */
   const celsius = kelvin - 273.15; 
   return Math.floor(celsius); //"method Math.floor per arrotondare il numero"
}

function converter() {
   celsiusOutput.value = temperature();
} 
//dichiariamo la funzione che poi viene presa dall'addEventListener
// senza dichiarare la funzione converter qui per l'addEventListener, si potrebbe fare cosi:
// document.querySelector("#button").addEventListener("click", () => {}); 
// RICORDARE la sintessi delle parentesi, ("click", function() {} ) - come creare una funzione normale

document.querySelector("#button").addEventListener("click", converter /*() => /*la parentesi extra non serve qui ma ve messa a fine funzione {
  ; // usiamo ancora la proprieta .value per modificare il valore dell'elemento del DOM*/)

console.log(temperature());