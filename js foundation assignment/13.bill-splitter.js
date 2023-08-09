
function splitBill(dishCosts, numPeople) {
    const totalBill = dishCosts.reduce((acc, cost) => acc + cost, 0);
    const billPerPerson = totalBill / numPeople;
  
    const billDetails = {
      totalBill: totalBill,
      billPerPerson: billPerPerson,
    };
  
    return billDetails;
  }
  
  // Example usage:
  const dishCosts = [1099, 1599, 899 , 111]; // Array of dish costs
  const numPeople = 8; // Number of people sharing the dishes
  
  const billDetails = splitBill(dishCosts, numPeople);
  
  console.log("Total bill:", billDetails.totalBill);
  console.log("Bill per person:", billDetails.billPerPerson);