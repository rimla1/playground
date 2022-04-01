// // Destructuring assignment takes
// // 1) values from arrays
// // 2) properties from objects
// // and sets them as local variables

// 1) VALUES FROM ARRAYS

// // * Example 1: Basic example *

// // //new
// const [one, two] = [1, 2, 3];
// console.log(one, two);

// // * Example 2: Basic example v2 *

// //new
// const arr = ["hamburger", "apple", "potato"];
// const [meat, fruit, vegetable] = arr;
// console.log(meat, fruit, vegetable);

// // * Example 3: Basic Example with emit a variable *

// // new
// const arr = ["hamburger", "apple", "potato"];
// const [meat, , vegetable] = arr;
// console.log(meat, vegetable);

// // * Example 3: Basic Example with having first variable and putting rest together *

// // new
// const arr = ["hamburger", "apple", "potato"];
// const [meat, ...rest] = arr;
// console.log(meat, rest);

// * Example 4: Basic example with default value if we have undefined case *
const arr = [undefined, "apple", "potato"];
let [meat, fruit, vegetable] = arr;
console.log((meat = "Hamburger"), fruit, vegetable);
// ??????????????????????????????????????????????

// PROPERTIES FROM OBJECTS

// * Example 1: Basic Example  *
const obj = {
  shroom: "imgOfMushroom",
  banana: "imgOfBanana",
  pepper: "imgOfPepper",
};

const { shroom, banana, pepper } = obj;

// * Example 2: Basic Example rename local variable with :  *
const obj = {
  shroom: "imgOfMushroom",
  banana: "imgOfBanana",
  pepper: "imgOfPepper",
};

const { shroom: mushroom, banana, pepper } = obj;

// * Example 3: Basic Example Nested Objects  *
const obj = {
  parent: {
    child: "imageOfChild",
  },
};

const {
  parent: { child },
} = obj;
