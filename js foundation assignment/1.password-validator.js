function validatePassword(password, confirmPassword) {
  if (password === confirmPassword) {
    console.log("Password Matched. Password validation Successful.");
  } else {
    console.log("Password didn't match. Password validation unsuccessful.");
  }
}

// for Example 
var password = "password123";
var confirmPassword = "password123";

validatePassword(password, confirmPassword);