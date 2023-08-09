function removeDuplicates(cart) {
    var uniqueCart = [];
  
    for (var i = 0; i < cart.length; i++) {
      if (!uniqueCart.includes(cart[i])) {
        uniqueCart.push(cart[i]);
      }
    }
  
    return uniqueCart;
  }
  
  // Example usage
  var customerCart = ['item1', 'item2', 'item1', 'item3', 'item2','item4', 'item5', 'item5', 'item5' ];
  var uniqueCart = removeDuplicates(customerCart);
  
  console.log("Cart without duplicates:", uniqueCart);