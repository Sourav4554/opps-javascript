// class Person{
//   constructor(name){
//   this.name=name
//  }
//  show(){
// console.log(`name=${this.name}`)
//  }
// }
// class Student extends Person{
//   constructor(name,course){
//   super(name)
//   this.course=course
//   }
// details(){
// console.log(`${this.name} persuing ${this.course}`)
// }
// }

// const s1=new Student('sourav','MERN stack')
// s1.details()

// Create a Person class and extend it to Teacher.

class Person {
  constructor(name) {
    this.name = name;
  }
  show() {
    console.log(`name=${this.name}`);
  }
}

class Teacher extends Person{
constructor(name,course){
    super(name)
    this.course=course
 }
details(){
console.log(`${this.name} teaching ${this.course}`)
}
}

const t1=new Teacher('Meera','Mern')
t1.details()


// Create an Employee class and extend it to Manager.
class Employee {
    constructor(name) {
      this.name = name;
    }
    show() {
      console.log(`name=${this.name}`);
    }
  }
  
  class Manager extends Employee{
  constructor(name,mname){
      super(name)
     this.mname=mname
   }
  details(){
  console.log(`${this.name} working under ${this.mname}`)
  }
  }
  
  const m1=new Manager('kiran','Anandhu')
  m1.details()
  // Create a Vehicle class and extend it to Bike.

  class Vehicle{
  breaking(){
console.log('breaking')
  }
  }

class Bike extends Vehicle{
 riding(){
console.log('riding')
super.breaking()
 }
 
}

const b1=new Bike()
b1.riding()