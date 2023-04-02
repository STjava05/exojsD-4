// Carrello e sconti particolari - BuildTime #2

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
*/

let marco = {
    name: 'Marco',
    lastName: 'Rossi',
    isAmbassador: true,
  }
  
  let paul = {
    name: 'Paul',
    lastName: 'Flynn',
    isAmbassador: false,
  }
  
  let amy = {
    name: 'Amy',
    lastName: 'Reed',
    isAmbassador: false,
  }
  
  let prices = [34, 5, 2]
  let shippingCost = 50
  
  
  // Esempio per l'utente Marco
  
  let user = marco
  let cartTotal = 0
  
  // Calcola il totale del carrello
  for (let i = 0; i < prices.length; i++) {
  cartTotal += prices[i]
  }
  
  // Applica lo sconto del 30% se l'utente è un Ambassador
  if (user.isAmbassador) {
  cartTotal *= 0.7
  }
  
  // Aggiungi il costo della spedizione se necessario
  if (cartTotal < 100) {
  cartTotal += shippingCost
  }
  
  // Stampa il costo totale del carrello
  console.log("Totale carrello:", cartTotal)
  
  // Esempio per l'utente Paul
  
  user = paul
  cartTotal = 0
  
  // Calcola il totale del carrello
  for (let i = 0; i < prices.length; i++) {
  cartTotal += prices[i]
  }
  
  // Applica lo sconto del 30% se l'utente è un Ambassador
  if (user.isAmbassador) {
  cartTotal *= 0.7
  }
  
  // Aggiungi il costo della spedizione se necessario
  if (cartTotal < 100) {
  cartTotal += shippingCost
  }
  
  // Stampa il costo totale del carrello
  console.log("Totale carrello:", cartTotal)
  
  // Esempio per l'utente Amy
  
  user = amy
  cartTotal = 0
  
  // Calcola il totale del carrello
  for (let i = 0; i < prices.length; i++) {
  cartTotal += prices[i]
  }
  
  // Applica lo sconto del 30% se l'utente è un Ambassador
  if (user.isAmbassador) {
  cartTotal *= 0.7
  }
  
  // Aggiungi il costo della spedizione se necessario
  if (cartTotal < 100) {
  cartTotal += shippingCost
  }
  
  // Stampa il costo totale del carrello
  console.log("Totale carrello:", cartTotal)
  