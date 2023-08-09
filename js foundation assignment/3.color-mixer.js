function mixColors(color1, color2) {
    var resultingColor;
  
    switch (color1) {
      case "red":
        switch (color2) {
          case "blue":
            resultingColor = "purple";
            break;
          case "yellow":
            resultingColor = "orange";
            break;
          default:
            resultingColor = "Invalid color combination";
            break;
        }
        break;
      case "blue":
        switch (color2) {
          case "red":
            resultingColor = "purple";
            break;
          case "yellow":
            resultingColor = "green";
            break;
          default:
            resultingColor = "Invalid color combination";
            break;
        }
        break;
      case "yellow":
        switch (color2) {
          case "red":
            resultingColor = "orange";
            break;
          case "blue":
            resultingColor = "green";
            break;
          default:
            resultingColor = "Invalid color combination";
            break;
        }
        break;
      default:
        resultingColor = "Invalid color combination";
        break;
    }
  
    console.log("Resulting color:", resultingColor);
  }
  
  // Example usage
  var color1 = "red";
  var color2 = "blue";
  
  mixColors(color1, color2);