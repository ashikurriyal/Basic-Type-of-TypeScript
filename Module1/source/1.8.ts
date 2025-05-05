{
    //Destructuring in TypeScript
    //Object Destructuring

    const user = {
        id: 234,
        name: {
            firstName: "Ashikur",
            lastName: 'riyal',
        },
        contactNo: 1234566,
        address: 'Baridhara'

    }

    const {
        //contactNo: string,
        //when we are going to destructure this thing we cannot specify its type here, 
        //simply we can allias here, that means
        contactNo : phoneNum,
        //the contactNo i will be get this thing after destructuring it will be phoneNum.
        //When you are destructuting you can only change its name
        name: {firstName: fName}
    } = user


    //Array Destructuring

    const myFriends = ['Gopu','Samir', 'Tanvir', 'Mithun', 'Chonu'];

    const [, , bestFriend, ...rest] = myFriends;



}