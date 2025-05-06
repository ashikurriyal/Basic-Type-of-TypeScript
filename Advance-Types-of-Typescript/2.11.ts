{
    //utility types

    //Pick Utility Types

    type Person = {
        name: string,
        age: number,
        email?: string,
        contactNo : string
    }

    // type Name = Pick<Person, "name">
    type NameAgeNo = Pick<Person, "name" | "age" | "contactNo">


    //Omit types

    type ContactInfo = Omit<Person, "name" | "age">


    //Require utility types

    type PersonRequire = Required<Person>

    //Partial Utility Types

    type PersonPartial = Partial<Person>


    //Readonly utility types


    type PersonReadOnly = Readonly<Person>
    const person1 : PersonReadOnly = {
        name: "riyal",
        age: 25,
        contactNo: '011'
    }

    //the error that you cant change the value, cause its readonly type
    // person1.name = 'ashikur'


    //Record Utility types

    // type MyObj = {
    //     a: string;
    //     b: string,

    // }

    type MyObj = Record<string, string>
    //<string== object index are string , string: the value they holds are string value>
    //if it was array the key should be then <number, string> cause array's index are numbers[0,1,2]

    const obj1 : MyObj = {
        a: 'aa',
        b: 'bb',
        //can add more by using record type
        c: 'cc'
    }





}