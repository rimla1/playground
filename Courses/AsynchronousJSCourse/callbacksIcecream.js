let stocks = {
  Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
  Liquid: ["Water", "Ice"],
  Holder: ["Cone", "Cup", "Stick"],
  Toppings: ["Chocolate", "Peanuts"],
};

console.log(stocks.Fruits[2]);

// We need order of Icecream to start production of Icecream

const order = (Fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[Fruit_name]}`);
  }, 2000);
  call_production();
};

const production = () => {};

// order(production);

// Store Room -> Back-end
// Kitchen -> Front-end
