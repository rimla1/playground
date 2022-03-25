const one = (second_funtion) => {
  console.log("Step one");
  second_funtion();
};

const two = () => {
  console.log("Step two");
};

one(two);
