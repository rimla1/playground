let stocks = {
  Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
  Liquid: ["Water", "Ice"],
  Holder: ["Cone", "Cup", "Stick"],
  Toppings: ["Chocolate", "Peanuts"],
};

// We need order of Icecream to start production of Icecream

const order = (
  Fruit_name,
  Liquid_name,
  Holder_name,
  Toppings_name,
  call_production
) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[Fruit_name]} was selected`);
    console.log(`${stocks.Liquid[Liquid_name]} was selected`);
    console.log(`${stocks.Holder[Holder_name]} was selected`);
    console.log(`${stocks.Toppings[Toppings_name]} was selected`);
    call_production();
  }, 2000);
};

const production = () => {
  setTimeout(() => {
    console.log("production has started");
  }, 0000);
};

order(2, 1, 1, 0, production);

// Store Room -> Back-end
// Kitchen -> Front-end
