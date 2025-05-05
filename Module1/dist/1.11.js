"use strict";
var _a, _b;
{
    // When ? is using for logicial thinking or decision making its called -> Ternary Operator
    // Object has that value -> optional chaining
    // In typescript another one is - Nullish coalescing
    const age = 18;
    if (age >= 18) {
        console.log('adult');
    }
    else {
        console.log('not adult');
    }
    const isAdult = age >= 18 ? 'adult' : 'not adult';
    // console.log(isAdult)
    //console.log({isAdult}) //printing the value is object basis
    //Nullish coalescing operator
    // used when i have to decision make on the basis of null / undefined value
    // const isAuthenticated = null;
    const isAuthenticated = '';
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : 'Guest';
    const result2 = isAuthenticated ? isAuthenticated : 'Guest';
    console.log({ result1 }, { result2 });
    const user = {
        name: 'riyal',
        address: {
            city: 'dhaka',
            road: 'vatara',
            presentAddress: 'Baridhara',
            // permanentAddress: 'kushtia'
        }
    };
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : 'No Permanent Address';
    console.log({ permanentAddress });
}
