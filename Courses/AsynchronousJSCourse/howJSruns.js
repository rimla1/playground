// Synchronous system
console.log("I");
console.log("eat");
console.log("ice cream");
console.log("with a");
console.log("spoon");

// Asynchronous system
setTimeout(() => {
  console.log("spoon");
}, 5000);

// Syncrhonous & Asynchronous example
console.log("I");
console.log("eat");
// console.log("spoon");
setTimeout(() => {
  console.log("spoon");
}, 3000);
console.log("ice cream");
console.log("with a");
