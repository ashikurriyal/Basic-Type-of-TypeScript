{
    //Generic Constraints with keyof Operator

    type Vehicle = {
        bike: string,
        car: string,
        ship: string,

    }

    type OwnerType = "bike" | 'car' | 'string' //manually

    //now the same thing using keyof

    type OwnerKeyofType = keyof Vehicle

    // const person1 : OwnerType = ""




    const user = {
        name: 'riyal',
        age: 25,
        address: 'baridhara'
    }

    const car = {
        model: 'Toyota',
        year: '2010'
    }

    // Y extends 'name' | 'age' | 'address' === Y extends keyof X
    const getPropertyValue = <X, Y extends keyof X> (obj: X, key : Y) => {
        return obj[key]
    }

    //no you can not pass any other value which are not relevant 
    const result = getPropertyValue(car, 'year')

    




}