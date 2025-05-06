{
    //Mapped Types

    //How Map is working

    const arrofNumbers: number[] = [1,4,5];
    const arrofStrings: string[] = arrofNumbers.map((number => number.toString()))
    console.log(arrofStrings)

    //Now mapped types

    type AreaNumber = {
        height: number;
        width: number
    }

    //lookup types
    type Height = AreaNumber["height"] 


    // type AreaString = {
    //     height: string;
    //     width: string
    // }




    
    // G => {height: string; width: number}
    //key => "height", "width"

    type AreaString <G> = {
        [key in keyof G] : G[key]
    }

    const area1: AreaString<{height: string; width: number}> = {
        height: '100',
        width: 50
    }





}