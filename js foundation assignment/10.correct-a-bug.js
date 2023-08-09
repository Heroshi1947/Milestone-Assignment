function removeBug(cart) {
    var newCart = [];
  
    for (var i = 0; i < cart.length; i++) {
      
        newCart.push(cart[i]*2);
      
    }
  
    return newCart;
  }
  
  // Example usage
  var customerCart = [ 1,2,3,4,5,6,7,8 ];
  var newCart = removeBug(customerCart);
  
  console.log("Cart without bugs:", newCart);