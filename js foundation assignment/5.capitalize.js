function capitalizeFirstName(name) {
    var firstLetter = name.charAt(0);
    var capitalizedFirstLetter = firstLetter.toUpperCase();
  
    var modifiedName = firstLetter === capitalizedFirstLetter
      ? name
      : capitalizedFirstLetter + name.slice(1);
  
    return modifiedName;
  }
  
  // Example usage
  var userName = "johnson";
  var modifiedName = capitalizeFirstName(userName);
  
  console.log("Modified name:", modifiedName);