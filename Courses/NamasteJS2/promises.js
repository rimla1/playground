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
    return proceedToPaymentPromise(orderId);
  })
  .then((paymentInfo) => {
    return orderSummary(paymentInfo);
  })
  .then(() => {
    return updateWallet();
  });
