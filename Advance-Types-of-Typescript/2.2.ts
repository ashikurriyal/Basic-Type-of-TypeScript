{
    // Interface


    //using type alias
    type User1 = {
        name: string,
        age: number,
    }

    // const user1 : User1 = {
    //     name: 'riyal',
    //     age: 25,
    // }

    //using interface

    interface User2 {
        name: string,
        age: 25,
    }

    // const user2 : User2 = {
    //     name: 'riyal',
    //     age: 25,
    // }

    //For all primitive we can use type alias
    //For object we can use both type alias & interface



    //Using type alias we can extend a property through intersection type(&)
    type UserWithRole1 = User1 & {role : string}

    const user1: UserWithRole1 = {
        name: 'riyal',
        age: 25,
        role: 'developer'
    }

    //We can also use the same thing by using interface
    interface UserWithRole2 extends User2 {
        role: string
    }
    const user2: UserWithRole2 = {
        name: 'riyal',
        age: 25,
        role: 'developer'
    }


    //array

    type Roll1 = number[];
    const rollNumber1: Roll1 = [1,2,3]


    interface Roll2 {
        [index: number ]: number
    }
    const rollNumber2: Roll2 = [1,2,3]



    //function

    type Add1 = (num1: number, num2: number) => number
    interface Add2 {
        (num1: number, num2: number) : number
    }

    //you can use here both Add1 / Add2 (both type alias / interface)
    const add: Add2 = (num1, num2) => num1 + num2


    // For better usage
    //Arrary, Function - Type alias is cleaner
    //Object - Type alias / interface 

}