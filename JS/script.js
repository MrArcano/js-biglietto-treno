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


// 3. Controllo età e applico sconto se necessario
if(parseInt(userAge) < 18){
  costoTariffa = costoTariffa * (100 - scontoUnder18) / 100;
}
if(parseInt(userAge) >= 65){
  costoTariffa = costoTariffa * (100 - scontoOver65) / 100;
}

document.getElementById("priceTicket").innerHTML= costoTariffa.toFixed(2);






