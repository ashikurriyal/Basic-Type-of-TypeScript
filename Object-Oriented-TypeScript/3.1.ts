{   
    //OOP - Class

    class Animal {
        //property
        // name: string;
        // species: string; 
        // sound: string; 

        //Constructor
        constructor(public name: string, public species: string, public sound: string){
            // this.name = name;
            // this.species = species;
            // this.sound = sound;
        }

        //parameter properties
        //dont need to specify property and also this.name modifier
        //when its inside in parameter, Public name : string => the typeScript will do the this.name work itself

        //when inside a class you will write a function its called method
        //method - here you have to use normal function cause Arrow function doesnt support dist
        makeSound(){
            console.log(`The ${this.name} says ${this.sound}`)
        }
    }

    //Now creating the instense/object on the basis of Animal Class
    const dog = new Animal('German Shepard', 'dog', 'Ghew Ghew')
    const cat = new Animal('Persian', 'Cat', 'Meaw Meaw')

    //Mehtod Call
    cat.makeSound();
    dog.makeSound();






}