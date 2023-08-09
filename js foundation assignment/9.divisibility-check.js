function printNumbers(arr) {
    for (var i = 0; i < arr.length; i++) {
      var num = arr[i];
  
      if (num % 3 === 0 && num % 2 !== 0) {
        console.log(num);
      } else {
        continue;
      }
    }
  }
  
  // Example usage
  var numbers = [19,6,33, 12, 15, 18, 21, 24];
  printNumbers(numbers);