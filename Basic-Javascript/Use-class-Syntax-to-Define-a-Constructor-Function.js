//problem 

//Use the class keyword and write a constructor to create the Vegetable class.

//The Vegetable class allows you to create a vegetable object with a property name that gets passed to the constructor.


// Only change code below this line

//answer 
class Vegetable {
    constructor(carrot){
     this.name = carrot;
    }
  }

  // Only change code above this line
  
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); // Should display 'carrot'

 
