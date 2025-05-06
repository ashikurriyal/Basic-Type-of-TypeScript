{
    //Generic Type - Generalize a type, dynamically type creation & resuse
    


    //Array generic types


    type GenericArray<t> = Array<t>

    // const rollNumbers: number[] = [2,4,6]
    // const rollNumbers: Array<number> = [2,4,6]
    const rollNumbers: GenericArray<number> = [2,4,6]

    // const mentors: string[] = ['A', 'B', 'C']
    // const mentors: Array<string> = ['A', 'B', 'C']
    const mentors: GenericArray<string> = ['A', 'B', 'C']

    // const boolArray: boolean[] = [true, false, true]
    // const boolArray: Array<boolean> = [true, false, true]
    const boolArray: GenericArray<boolean> = [true, false, true]


    const user : GenericArray<{name: string, age: number}> = [
        {
            name: 'riyal',
            age: 25,
        }, 
        {
            name: 'Raz',
            age: 26
        }
    ]


    const add = (x: number, y:number) => x+y;
    add(30,20)



    //Generic Tuple

    type GenericTuple<X, Y> = [X, Y]
    const person : GenericTuple<string, string> = ['x', 'y']



    const UserWithId: GenericTuple<number, {name: string, email: string}> = [1234, {name: 'riyal', email:'riyalashikur@gmail.com'}]





}