"use strict";
// TypeScript: Fundamentals
const person = {
    name: "James",
    age: 25,
    job: "developer",
    address: {
        street: undefined,
        city: "berlin",
    },
};
console.log("person.address.city:", person.address.city);
console.log("person.address.street:", person.address.street);
