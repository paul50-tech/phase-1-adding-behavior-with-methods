
class Cat {
    constructor(name, breed) {
      this.name = name;
      this.breed = breed;
    }
  
    speak() {
      return `${this.name} says meow!`;
    }
  }

  class Dog {
    constructor(name, breed) {
      this.name = name;
      this.breed = breed;
    }
  
    speak() {
      return `${this.name} says woof!`;
    }
  }

  class Bird {
    constructor(name, breed) {
      this.name = name;
      this.breed = breed;
    }
  
    speak() {
      if (this.breed.toLowerCase() === "parrot" || this.name === "Pablo") {
        return `It's me! ${this.name}, the parrot!`;
      } else {
        return `${this.name} says squawk!`;
      }
    }
  }

// example of usage

  let myCat = new Cat("Whiskers", "Siamese");
  console.log(myCat.speak());

  let myDog = new Dog("Rex", "Golden Retriever");
  console.log(myDog.speak());
  
  let myParrot = new Bird("Pablo", "parrot");
  console.log(myParrot.speak());
  
  let myOtherBird = new Bird("Mable", "canary");
  console.log(myOtherBird.speak());
  