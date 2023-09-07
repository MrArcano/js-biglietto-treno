/*

1. Chiedere numero di chilometri da percorrere ed età

2. Calcolo tariffa chilometri

3. Controllo età e applico sconto se necessario

4. Output messaggio cifra finale con due decimali

*/

// Dichiaro variabili utili
const tariffaKm = 0.21;
const scontoUnder18 = 20;
const scontoOver65 = 40;

// 1. Chiedere numero di chilometri da percorrere ed età
const userKm = prompt("Numero di chilometri che vuoi percorrere: ");
const userAge = prompt("Quanti anni hai ?");

// 2. Calcolo tariffa chilometri
let costoTariffa = parseInt(userKm) * tariffaKm;
let textOutput = 
`
Il costo del biglietto al km è: ${tariffaKm}€. <br>
Vuoi percorrere ${userKm} km, quindi il costo del biglietto è: ${costoTariffa.toFixed(2)}€ <br>
` 


// 3. Controllo età e applico sconto se necessario
if(parseInt(userAge) < 18){
  costoTariffa = costoTariffa * (100 - scontoUnder18) / 100;

  textOutput = 
  `
  ${textOutput} <br> 
  Per i minorenne viene applicato uno sconto del ${scontoUnder18}% <br>
  Il costo del tuo biglietto è: ${costoTariffa.toFixed(2)}€
  `
}
if(parseInt(userAge) >= 65){
  costoTariffa = costoTariffa * (100 - scontoOver65) / 100;
  textOutput = 
  `
  ${textOutput} <br> 
  Per gli over 65 viene applicato uno sconto del ${scontoOver65}% <br>
  Il costo del tuo biglietto è: ${costoTariffa.toFixed(2)}€
  `
}

// 4. Output messaggio cifra finale con due decimali
document.getElementById("priceTicket").innerHTML= textOutput;






