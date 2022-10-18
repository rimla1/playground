const fetch = require("node-fetch");

// const cart = ["t-shirt", "shoes", "pants"];

// // Callbacks approach
// createOrderCB(cart, (orderId) => {
//     proceedToPaymentCB(orderId)
// }) // result[orderId]

// // Promises approach
// createOrderPromise(cart).then((orderId) => {
//     proceedToPaymentPromise(orderId)
// })

const GITHUB_API = "https://api.github.com/users/rimla1";

const user = fetch(GITHUB_API);

console.log(user);
