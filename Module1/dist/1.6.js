"use strict";
//Function in TypeScript
// Normal Function
// Arrow Function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 2);
var addArrow = function (num1, num2) { return num1 + num2; };
// Object --> function --> Method
// When a function is inside in a object we call it method;
var poorUser = {
    name: 'riyal',
    balance: 0,
    addBalance: function (balance) {
        return "My new balance is : ".concat(this.balance + balance);
    }
};
//Map function - square of an array
var array = [2, 5, 10];
var newArray = array.map(function (e) { return e * e; });
console.log(newArray);
