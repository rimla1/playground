let name1 = {
  firstname: "Almir",
  lastname: "Muminovic",
};

let name2 = {
  firstname: "Akshay",
  lastname: "Saini",
};

function printFullname(hometown, country) {
  console.log(
    this.firstname + " " + this.lastname + " from " + hometown + ", " + country
  );
}

printFullname.call(name1, "Novi Pazar", "Serbia");
printFullname.apply(name2, ["New Delhi", "India"]);

// Using call method we can do function borrowing
// We can borrow function from other objects and use them with data of other objects
// call(arg1, arg2) arg1 refers to a values that this keyword should point at, arg2 refers to a function parametar
