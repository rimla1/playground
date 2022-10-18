const cart = ["t-shirt", "shoes", "pants"];

// Callbacks approach
createOrderCB(cart, (orderId) => {
  proceedToPaymentCB(orderId, (paymentInfo) => {
    orderSummary(paymentInfo, () => {
      updateWallet();
    });
  });
}); // result[orderId]

// Promises approach
createOrderPromise(cart)
  .then((orderId) => {
    proceedToPaymentPromise(orderId);
  })
  .then((paymentInfo) => {
    orderSummary(paymentInfo);
  })
  .then(() => {
    updateWallet();
  });
