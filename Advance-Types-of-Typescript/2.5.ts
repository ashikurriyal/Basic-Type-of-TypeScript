{
    //Function with generics

    const createArray = (param: string) : string[] => {
        return [param]
    }
    const res1 = createArray('Bangladesh')


    const createArrayWithGenerics = <T> (param: T) : T[] => {
        return [param]
    }
    const resGeneric = createArrayWithGenerics<string>('Bangladesh')

    type User = {id: number, name: string}
    const resGenericObj = createArrayWithGenerics<User>({id:123, name: 'Ashikur Riyal'})



    //using tuple
    const createArrayWithTuple = <T, Q> (param1: T, param2: Q) : [T,Q] => {
        return [param1, param2]
    }

    const resTuple = createArrayWithTuple<string, number>('Bangladesh' , 123)
    const resTuple2 = createArrayWithTuple<string, {Region: string}>('Bangladesh', {Region: 'Asia'})






    const addCourseToStudent = <G> (student : G ) => {
        const course = 'Basic Web Dev';

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({name: 'riyal', email: 'riyalashikur@gmail.com', devType: 'Frontend'})



}