/*uppgift 5: Skapar en array som innehåller minst fem valfria maträtter Sirad Ahmed 2026.*/
"use strict";
const maträtter = ["Pizza", "Sushi", "Tacos", "Pasta", "Burgare"];
console.log("Maträtter:" + maträtter);
console.log("Första maträtten: " + maträtter[0]);
console.log("Sista maträtten: " + maträtter[4]);
maträtter.push("Sallad");
console.log("Efter att ha lagt till en maträtt: " + maträtter);
maträtter.shift();
console.log("Efter att ha tagit bort den första maträtten: " + maträtter);