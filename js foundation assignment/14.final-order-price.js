const orderCost = (cart) => {
    const totalCost = cart.reduce((acc, item) => acc + (item.unitPrice * item.quantity), 0);
    return totalCost;
  };
  
  // Example usage:
  const cart = [
    { unitPrice: 1099, quantity: 2 },
    { unitPrice: 1599, quantity: 1 },
    { unitPrice: 899, quantity: 3 },
    {unitPrice:657, quantity: 6}
  ];
  
  const totalCost = orderCost(cart);
  console.log("Total cost:", totalCost);