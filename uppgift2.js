/*uppgift2.js – Operatorer och beräkningar*/
"use strict";
const price = 100;
const quantity = 3;
const tax = 0.25;
const totalPrice = price * quantity  ;
const totalPriceWithTax = totalPrice * (1 + tax);
console.log("Pris: " + price + "kr");
console.log("Antal: " + quantity);
console.log("Totalt: " + totalPrice+ "kr");
console.log("Totalt inklusive moms: " + totalPriceWithTax+"kr");
