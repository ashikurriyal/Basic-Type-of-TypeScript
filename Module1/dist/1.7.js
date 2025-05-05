"use strict";
{
    //Spread Operator
    //Using array
    const bros1 = ["Shuvo", "Raz"];
    const bros2 = ["Samir", "Tanvir"];
    //why this is wrong?
    //bros1.push(bros2) this output will like ['Shuvo', 'Raz', ['Samir','Tanvit']]
    //js will catch this error duting run time but ts will tell you this erro when you will write this
    //Correct approach with rest operator
    console.log(bros1.push(...bros2));
    //using object
    const mentors1 = {
        typescript: "Mezba",
        redux: "Mir",
        dbms: "Mizan",
    };
    const mentors2 = {
        prisma: "Firoz",
        next: "Tanmoy",
        cloud: "Nahid",
    };
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
    console.log(mentorList);
    //Rest Operator
    //First example without rest operator
    const myNewFriends = (friend1, friend2, friend3) => {
        console.log(`Hi my new friends ${friend1} ${friend2} ${friend3}`);
    };
    myNewFriends("Tazveew", "Nusrat", "Nabany");
    //Here the problem is how many time you will update the parameters number individually!
    //Now using rest operator
    const myOldFriends = (...friends) => {
        // console.log(`Hi ${friend1} ${friend2} ${friend3}`);
        friends.forEach((friend) => console.log(`Hi my old friends ${friend}`));
    };
    myOldFriends("Sudipto", "Samir", "Tanvir");
}
