let stocks = {
  Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
  Liquid: ["Water", "Ice"],
  Holder: ["Cone", "Cup", "Stick"],
  Toppings: ["Chocolate", "Peanuts"],
};

const is_shop_open = true;

const order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("our shop is closed"));
    }
  });
};

order(2000, () => {
  console.log(`${stocks.Fruits[0]} was selected`);
})
  .then(() => {
    return order(0000, () => {
      console.log("Production has started");
    }).then(() => {
      return order(2000, () => {
        console.log("Cut the fruits");
      }).then(() => {
        return order(1000, () => {
          console.log(
            `${stocks.Liquid[0]} and ${stocks.Liquid[1]} has been added`
          );
        }).then(() => {
          return order(1000, () => {
            console.log("Machine has started");
          }).then(() => {
            return order(2000, () => {
              console.log(`Icecream was placed on ${stocks.Holder[0]}`);
            }).then(() => {
              return order(3000, () => {
                console.log(`${stocks.Toppings[0]} added on top of icecream`);
              }).then(() => {
                return order(1000, () => {
                  console.log("Serve Icecream");
                });
              });
            });
          });
        });
      });
    });
  })
  .catch(() => {
    console.log("Custom left");
  });

//   .finally(() => console.log("day ended"));
