let stocks = {
  Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
  Liquid: ["Water", "Ice"],
  Holder: ["Cone", "Cup", "Stick"],
  Toppings: ["Chocolate", "Peanuts"],
};

// We need order of Icecream to start production of Icecream

const order = (Fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[Fruit_name]} was selected`);
    call_production();
  }, 2000);
};

const production = () => {
  setTimeout(() => {
    console.log("production has started");

    setTimeout(() => {
      console.log("The fruit has been chopped");
      setTimeout(() => {
        console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`);
        setTimeout(() => {
          console.log("Machine has been started");
          setTimeout(() => {
            console.log(`Icecream was placed on ${stocks.Holder[0]}`);
            setTimeout(() => {
              console.log(`You choose ${stocks.Toppings[1]}`);
              setTimeout(() => {
                console.log("serve ice cream");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0000);
};

order(2, production);

// Store Room -> Back-end
// Kitchen -> Front-end
