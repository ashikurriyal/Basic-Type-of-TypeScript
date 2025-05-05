"use strict";
{
    //Destructuring in TypeScript
    //Object Destructuring
    var user_1 = {
        id: 234,
        name: {
            firstName: "Ashikur",
            lastName: 'riyal',
        },
        contactNo: 1234566,
        address: 'Baridhara'
    };
    var 
    //contactNo: string,
    //when we are going to destructure this thing we cannot specify its type here, 
    //simply we can allias here, that means
    phoneNum = user_1.contactNo, fName = user_1.name.firstName;
    //Array Destructuring
    var myFriends = ['Gopu', 'Samir', 'Tanvir', 'Mithun', 'Chonu'];
    var bestFriend = myFriends[2], rest = myFriends.slice(3);
}
