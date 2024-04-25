let user = {
  fname: "sachin",
  lname: "Tendulkar",
  age: 50,
  inteam: false,
  hobbies: ["cricket", "football"],
  contactdet: {
    city: "mumbai",
    state: "maharastra",
    country: "india",
  },
  fullname: function () {
    return this.fname + "-" + this.lname;
  },
};
/*console.log(user)
console.log(user.fname)
console.log(user["lname"])
console.log(user.contactdet.city)
console.log(user["contactdet"]["country"])
console.log(user.fullname())*/

let user2 = {
  firstname: "virat",
  lastname: "kholi",
  age: 35,
  fullname: () => {
    console.log(this);
    return this.firstname + "-" + this.lastname;
  },
  full_name: function () {
    console.log(this);
    return this.firstname + "-" + this.lastname;
  },
};

console.log(user2.fullname());
console.log(user2.full_name());
