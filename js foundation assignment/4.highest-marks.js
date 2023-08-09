function findHighestMarks(marks) {
    var highestMarks = 0;
  
    for (var i = 0; i < marks.length; i++) {
      highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks;
    }
  
    return highestMarks;
  }
  
  // Example usage
  var marks = [85, 92, 78, 95, 98];
  var highestMarks = findHighestMarks(marks);
  
  console.log("Highest marks:", highestMarks);