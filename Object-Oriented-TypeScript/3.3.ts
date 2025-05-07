{
    //Type Guard 

    //typeof --> type guard (How typeof working as type guard)

    type AlphaNumeric = string | number;


    const add = (param1: AlphaNumeric, param2: AlphaNumeric) : AlphaNumeric => {

        if(typeof param1 === 'number' && typeof param2 === 'number'){
            return param1+param2
        } else {
            return param1.toString() + param2.toString();
        }
        
    }

    const res1 = add(2,3);


    //In Guard - Works in object

    type NormalUser = {
        name: string,
    }

    type AdminUser = {
        name: string,
        role: 'admin'
    }


    const getUser = (user: NormalUser | AdminUser) => {
        if('role' in user){
            
            console.log('Welcome Admin')
        } else {
            console.log('general user')
        }
    }

    const normalUser : NormalUser = {
        name: 'Mr. Normal User',
    }

    const adminUser : AdminUser = {

        name: 'Mr Admin',
        role: 'admin',
    }

    getUser(adminUser)

}