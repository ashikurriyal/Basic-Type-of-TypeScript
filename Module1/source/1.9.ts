{
    //Type Alias

    type Student = {
        name: string,
        age: number,
        gender: string,
        address: string;
        contactNo?: number,
    }

    const student1: Student = {
        name: 'Alif',
        age: 24,
        gender: 'male',
        address: 'Khulna',
        contactNo: 23729387,
    };
    const student2: Student = {
        name: 'Jakir',
        age: 28,
        gender: 'male',
        address: 'Dhaka'
    };

    type UserName = string;
    type Address = string

    const name: UserName = 'riyal'
    const address: Address = 'baridhara'


    //type alias for a function
    type Add = (num1: number, num2: number) => number

    const add: Add = (num1, num2) => num1+num2






}