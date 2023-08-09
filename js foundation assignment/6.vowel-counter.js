function countVowels(name) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var count = 0;
  
    for (var i = 0; i < name.length; i++) {
      var currentChar = name[i].toLowerCase();
  
      if (vowels.includes(currentChar)) {
        count++;
      }
    }
  
    return count;
  }
  
  // Example usage
  var userName = "shivam mishra ";
  var vowelCount = countVowels(userName);
  
  console.log("Number of vowels:", vowelCount);