{
    //Conditional Types

    //If a type is dependent on another type based on a condition its called conditional types in typescript

    type a1 = null 
    type b1 = undefined
    

    type x = a1 extends null ? true : false // x is chonditional type


    //Nested conditional type
    type y = a1 extends null ? true : b1 extends undefined ?  undefined : any;

    type People = {
        bike: string;
        car: string;
        ship: string;
        plane: string
    }

    //keyof people "bike" | 'ship' | 'car' 


    // has car or bike or ship
    type checkVehicle<G> = G extends keyof People ? true : false
    
    type HasBike = checkVehicle<'plane'>


}