/*Uppgift 3: Skriv ett program som tar en persons ålder som input och skriver ut om personen är barn, vuxen eller pensionär.Sirad Ahmed*/
"use strict";
const age = 10;
if (age >= 65) {
    console.log("Pensionär");
} else if (age >= 18) {
    console.log("Vuxen");
} else {
   console.log("Barn");
}
