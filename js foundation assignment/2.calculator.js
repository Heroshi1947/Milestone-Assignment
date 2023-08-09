function calculator(num1, num2, operator) {
    var result;
  
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        console.log("Invalid operator");
        return;
    }
  
    console.log("Result:", result);
  }
  
  // Example usage
  var num1 = 5;
  var num2 = 3;
  var operator = "+";
  
  calculator(num1, num2, operator);