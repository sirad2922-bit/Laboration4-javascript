/* Skapa ett sammanhängande program. Sirad Ahmed 2026 */
"use strict";
const people = [
    { name: "Alex", age: 14, city: "Ludvika" },
    { name: "Sirad", age: 40, city: "Göteborg" },
    { name: "Maria", age: 28, city: "Malmö" }
];
for (let i = 0; i < people.length; i++) {
    const person = people[i];
    printPersonInfo(person);
}
function printPersonInfo(person) {
if (person.age >= 18) {person.isAdult = true;
    console.log(person.name + " är myndig och bor i " + person.city);
}else {
    person.isAdult = false;
  console.log(person.name + " är inte myndig och bor i " + person.city);
}
}
