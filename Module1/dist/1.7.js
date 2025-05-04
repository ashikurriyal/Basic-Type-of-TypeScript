"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
    //Spread Operator
    //Using array
    var bros1 = ["Shuvo", "Raz"];
    var bros2 = ["Samir", "Tanvir"];
    //why this is wrong?
    //bros1.push(bros2) this output will like ['Shuvo', 'Raz', ['Samir','Tanvit']]
    //js will catch this error duting run time but ts will tell you this erro when you will write this
    //Correct approach with rest operator
    console.log(bros1.push.apply(bros1, bros2));
    //using object
    var mentors1 = {
        typescript: "Mezba",
        redux: "Mir",
        dbms: "Mizan",
    };
    var mentors2 = {
        prisma: "Firoz",
        next: "Tanmoy",
        cloud: "Nahid",
    };
    var mentorList = __assign(__assign({}, mentors1), mentors2);
    console.log(mentorList);
    //Rest Operator
    //First example without rest operator
    var myNewFriends = function (friend1, friend2, friend3) {
        console.log("Hi my new friends ".concat(friend1, " ").concat(friend2, " ").concat(friend3));
    };
    myNewFriends("Tazveew", "Nusrat", "Nabany");
    //Here the problem is how many time you will update the parameters number individually!
    //Now using rest operator
    var myOldFriends = function () {
        var friends = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            friends[_i] = arguments[_i];
        }
        // console.log(`Hi ${friend1} ${friend2} ${friend3}`);
        friends.forEach(function (friend) { return console.log("Hi my old friends ".concat(friend)); });
    };
    myOldFriends("Sudipto", "Samir", "Tanvir");
}
