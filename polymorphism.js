// class Animal{
// sound(){
// console.log(`animals make sound`)
// }
// }
// class Dog extends Animal{
// sound(){
// console.log(`dog bark`)
// }
// }
// const a=new Dog();
// const b=new Animal()
// b.sound()
// a.sound()

// class Vehicle{
//   start(){
// console.log('vehicle start')
//  }

// }
// class Bike extends Vehicle{
// start(){
// console.log('bike starting')
// }
// }

// const a=new Vehicle()
// a.start()
// const b=new Bike()
// b.start()
class Vehicle{
    start(){
  console.log('vehicle start')
   }
  
  }
  class Bike extends Vehicle{
  start(){
    super.start()
  console.log('bike starting')
  }
  }
  

  const b=new Bike()
  b.start()