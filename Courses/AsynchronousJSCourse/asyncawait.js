let stocks = {
  Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
  Liquid: ["Water", "Ice"],
  Holder: ["Cone", "Cup", "Stick"],
  Toppings: ["Chocolate", "Peanuts"],
};

const is_shop_open = true;

const time = (ms) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("shop is closed"));
    }
  });
};

const kitchen = async () => {
  try {
    await time(2000);
    console.log(`${stocks.Fruits[0]} is selected`);

    await time(0000);
    console.log("start the production");

    await time(2000);
    console.log("cut the fruits");

    await time(1000);
    console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} has been added`);

    await time(1000);
    console.log("Machine has started");

    await time(2000);
    console.log(`Icream gets on ${stocks.Holder[0]}`);

    await time(3000);
    console.log(`Icream received ${stocks.Toppings[1]}`);

    await time(0000);
    console.log("Ice cream served");
  } catch (error) {
    console.log(error);
  }
};

kitchen();
