const sum = (a, b) => {
  if (a && b) {
    return a + b;
  }
  throw new Error("Invalid arguments");
};

try {
  console.log(sum(5));
} catch (error) {
  console.log("Error occured!");
  //   console.log(error);
}

console.log("this works!");
