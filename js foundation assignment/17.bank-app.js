const customerAccount = {
    name: "Karan Nigam",
    balance: 1000,
    
    deposit: function(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Successfully deposited ${amount}. New balance: ${this.balance}`);
      } else {
        console.log("Invalid deposit amount. Please enter a valid amount.");
      }
    },
    
    withdraw: function(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Successfully withdrew ${amount}. New balance: ${this.balance}`);
      } else if (amount > this.balance) {
        console.log("Insufficient funds. Cannot withdraw more than the available balance.");
      } else {
        console.log("Invalid withdrawal amount. Please enter a valid amount.");
      }
    }
  };
  
  // Example usage:
  console.log("Hello! "+customerAccount.name+" ji");
  console.log("Initial balance:", customerAccount.balance);
  
  customerAccount.deposit(500); 
  customerAccount.withdraw(200); 
  
  console.log("Current balance:", customerAccount.balance);