{
  //Type guard in OOP
  //Instance of operator

  class Animal {
    //property
    name: string;
    species: string;

    //Constructor
    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log("I am making sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeBark(){
        console.log('I am Barking')
    }
  }
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeMeaow(){
        console.log('I am the king')
    }
  }


  const isDog = (animal: Animal) : animal is Dog => {
    return animal instanceof Dog
  }
  const isCat = (animal: Animal) : animal is Cat => {
    return animal instanceof Cat
  }

  const getAnimal = (animal: Animal) => {
    // if(animal instanceof Dog) {
    //     animal.makeBark()
    // } else if(animal instanceof Cat) {
    //     animal.makeMeaow()
    // } else {
    //     animal.makeSound()
    // }

    if (isDog(animal)){
        animal.makeBark()
    } else if(isCat(animal)){
        animal.makeMeaow()
    } else {
        animal.makeSound()
    }
    
  }

  //isntance

  const dog = new Dog('TommyDog', 'dog') //name, species
  const cat = new Cat('BotaamCat', 'cat')

  getAnimal(dog)
}
