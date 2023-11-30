"use strict";
const myButton = document.getElementById("btn");
// myButton.map((btn) => {
//     btn.addEventListener("click", () => {
//         console.log("Button clicked");
//     });
//     }
// ); // Error: 'myButton' could be null
// Add an event listener only if the button element exists
myButton === null || myButton === void 0 ? void 0 : myButton.addEventListener("click", () => {
    console.log("Button clicked");
}); // No error: 'myButton' is guaranteed to be non-null
