"use strict";
//Function in TypeScript
// Normal Function
// Arrow Function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 2);
const addArrow = (num1, num2) => num1 + num2;
// Object --> function --> Method
// When a function is inside in a object we call it method;
const poorUser = {
    name: 'riyal',
    balance: 0,
    addBalance(balance) {
        return `My new balance is : ${this.balance + balance}`;
    }
};
//Map function - square of an array
const array = [2, 5, 10];
const newArray = array.map((e) => e * e);
console.log(newArray);
