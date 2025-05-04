//Function in TypeScript

// Normal Function
// Arrow Function

function add (num1 : number, num2 : number) {
    return num1+num2;
}

add(2,2)

const addArrow = (num1: number, num2: number) : number => num1 + num2;

// Object --> function --> Method
// When a function is inside in a object we call it method;

const poorUser = {
    name: 'riyal',
    balance: 0,
    addBalance(balance:number): string {
        return `My new balance is : ${this.balance + balance}`
    }
}


//Map function - square of an array

const array : number[] = [2,5,10];
const newArray : number[] = array.map((e : number) : number => e * e)

console.log(newArray)
