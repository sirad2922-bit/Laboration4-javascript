/* Skapa en array med minst sex tal Sirad Ahmed 2026 */
"use strict";
const numbers = [6, 8, 9, 23, 25, 30];
console.log("Array med tal: " + numbers);
function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            sum += arr[i];
        }
    }
    return sum;
}
const totalSum = calculateSum(numbers);
console.log("Summan av talen i arrayen är: " + totalSum);