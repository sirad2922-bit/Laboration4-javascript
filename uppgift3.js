/*Uppgift 3: Skriv ett program som tar en persons ålder som input och skriver ut om personen är barn, vuxen eller pensionär.*/
"use strict";
const age = 40;
if (age >= 65) {
    console.log("pensionär");
} else if (age >= 18) {
    console.log("vuxen");
} else {
    console.log("barn");
}