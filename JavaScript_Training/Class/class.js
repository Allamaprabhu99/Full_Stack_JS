class Human {
  constructor(fname, lname, age, loc) {
    this.firstname = fname;
    this.lastname = lname;
    this.age = age;
    this.location = loc;
  }

  fullname() {
    return this.firstname + "-" + this.lastname;
  }
}

let h1 = new Human("Steve", "adam", 50, "pune");
let h2 = new Human("Peter", "Logan", 35, "london");

console.log(h1.fullname());
console.log(h2.fullname());

class Employee extends Human {
  constructor(fname, lname, age, loc, id, sal, exp) {
    super(fname, lname, age, loc);
    this.eid = id;
    this.salary = sal;
    this.exp = exp;
  }

  employeeDetails() {
    return ` I am ${this.fullname()} from ${this.location} 
       having ${this.exp} years exp with salary ${this.salary}rs`;
  }
}

let e1 = new Employee("Sachin", "Tendulkar", 50, "mumbai", 123, 50000, 20);
console.log(e1);
console.log(e1.employeeDetails());
