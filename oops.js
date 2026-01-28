// class Student{
//  constructor(name,age){
//     this.name=name,
//     this.age=age
//  }
//  display(){
// console.log(`${this.name} is ${this.age} old`)
//  }
// static info(){
//  console.log('this is static')
//  }
// }

// const s1=new Student('john',21)
// const s2=new Student('alan',30)

// s1.display()
// s2.display()
// Student.info()

//Create a Student class with name, roll number, and marks. Create 3 objects and display their details.

class Student {
  constructor(name, rollNo, mark1, mark2, mark3) {
    (this.name = name),
      (this.rollNo = rollNo),
      (this.mark1 = mark1),
      (this.mark2 = mark2),
      (this.mark3 = mark3);
  }
  details() {
    console.log(`
name=${this.name}
rollNo=${this.rollNo}
physics=${this.mark1}
chemistry=${this.mark2}
maths=${this.mark3}
`);
  }
}
const std1 = new Student("john", 1, 34, 22, 11);
const std2 = new Student("joel", 2, 45, 56, 67);
const std3 = new Student("jenifer", 3, 34, 44, 78);
std1.details();
std2.details();
std3.details();

//Create a Car class with brand and model. Add a method to display full name.

// class Car {
//   constructor(brand, model) {
//     (this.brand = brand), (this.model = model);
//   }
//   display() {
//     console.log(`${this.brand} will launch ${this.model}`);
//   }
// }

// const c = new Car("BMW", "iX3");
// c.display();

//Create a User class with username and password and a method to validate login.

class User {
  constructor(username, password) {
    (this.username = username), (this.password = password);
  }
  login(name, pass) {
    if (name && pass && name === this.username && pass === this.password) {
      console.log("sucessfully login");
    } else {
      console.log("wrong credentials");
    }
  }
}

const u = new User("sourav4554", "ssss");
u.login("sourav4554", "sss");


class Car{
 display(){
  console.log('drivingg')
 }
}

const car1=new Car()
car1.display()

class Atm{
 constructor(balance){
  this.balance=balance
}
depositMoney(money){
console.log(`${money} deposited`)
this.balance+=money
}
balanceAmount(){
return this.balance
}
}
const user1=new Atm(30000)
user1.depositMoney(1000)
console.log(user1.balanceAmount())