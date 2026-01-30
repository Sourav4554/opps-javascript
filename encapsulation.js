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
  