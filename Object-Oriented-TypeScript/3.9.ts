{
  //Abstraction in OOP ==> 3rd Piller of OOP
  //Ekta jinish ar puro shob kichu naa jene shudhu matro basic idea pawa
  //used to hide unnecessary information and display only necessary information to the users interacting

  //2 ways of abstraction --> 1. Using interface, 2. using abstract

  //1. Abstraction using interface

  //We can get idea here
  interface Vehicle1 {
    // name: string;
    // model: string;

    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  //for object
  // const vehicle1: Vehicle1 = {
  //     name: 'Yamaha',
  //     model: '2017',
  // }

  //and here is our real implementation
  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log(`I am starting the car engine`);
    }
    stopEngine(): void {
      console.log(`I am stopping the car engine`);
    }
    move(): void {
      console.log(`I am moving the car`);
    }
    test() {
      console.log(`I am just testing`);
    }
  }

  const toyotaCar = new Car1();
  toyotaCar.startEngine();

  //2. Abstraction using Abstract Class => also known as leader class

  //idea
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    // {
    //     console.log(`I am stopping the car engine`)
    // }
    abstract move(): void;
    // {
    //     console.log(`I am moving the car`)
    // }
    test() {
      console.log(`I am just testing`);
    }
  }

  //you can follow abstract class but cannt create instance, for follow you have to extends, that means child class

  class ToyotaCar extends Car2 {
    startEngine(): void {
      {
        console.log(`I am starting the car engine`);
      }
    }
    stopEngine(): void {
      {
        console.log(`I am stopping the car engine`);
      }
    }
    move(): void {
      {
        console.log(`I am moving the car`);
      }
    }
  }

//   const hondaCar = new Car2();
//   hondaCar.startEngine();
}
