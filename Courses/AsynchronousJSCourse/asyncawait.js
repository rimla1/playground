let stocks = {
  Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
  Liquid: ["Water", "Ice"],
  Holder: ["Cone", "Cup", "Stick"],
  Toppings: ["Chocolate", "Peanuts"],
};

const is_shop_open = true;

const toppings_choice = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("What you want as topping?"));
    }, 3000);
  });
};

const kitchen = async () => {
  console.log("a");
  console.log("b");
  console.log("c");
  await toppings_choice();
  console.log("d");
  console.log("e");
};

kitchen();

console.log("Doing the dishes");
console.log("Cleaning the tables");
console.log("Welcoming other guests");
