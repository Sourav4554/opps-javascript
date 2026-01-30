const person={
name:'sourav',
age:21,
greet(){
 console.log(`hello ${this.name}`)
}
}

const student={
 rollNo:40
}
student.__proto__=person
console.log(student.age)