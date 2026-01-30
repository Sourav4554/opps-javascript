class Student {
    #marks;
  
    constructor(name, marks) {
      this.name = name;
      this.Mark = marks; // calls setter
    }
  
    get Mark() {
      return this.#marks;
    }
  
    set Mark(value) {
      if (value > 100 || value < 0) {
        console.log('invalid mark');
      } else {
        this.#marks = value;
      }
    }
  }
  
  const s1 = new Student('alan', 56);
  console.log(s1.Mark); 

  //Create a BankAccount class where balance is private and can be
  // accessed only using methods.
  class BankAccount{
    #balance;
    constructor(bank,balance){
    this.bank=bank,
    this.#balance=balance
    }
    get Balance(){
    return this.#balance
    }
  
    set Deposit(value){
    if(value<0){
    console.log('invalid')
    }else{
    this.#balance+=value
    }
    }
     set Withdraw(value){
        if(value<0){
        console.log('invalid')
        }else{
        this.#balance-=value
        }
        }
  }
  const b=new BankAccount('FD',60000)
  b.Deposit=1000
  b.Withdraw=1
  console.log(b.Balance)