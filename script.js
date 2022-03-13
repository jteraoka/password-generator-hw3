// Define DOM elements
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");


// Clicking "Generate Password" runs writePassword function
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() { 
  var password = ""; 
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var specials = "!@#$%^&*()";
  var characters = letters;
  
/////Password Length?//////
  var passwordLength = window.prompt("How many charachters?","10");
        if (passwordLength > 128 || passwordLength <= 2) {
          window.alert("Yeah right!");

        } else if (passwordLength <= 128 && passwordLength > 2) { 
          window.alert("That's my favorite number!");
        }
        console.log(passwordLength);

///////Number?///////
  var withNumbers = window.confirm("Include numbers?");
        if (withNumbers == true) {
            window.alert("Okay, nerd!");
            characters+=numbers;
            console.log(characters);
            
        } else if (withNumbers == false) { 
            window.alert("Too cool for numbers, huh?");
        } 
////////Specials?/////
  var withSpecials = window.confirm("Include special characters?");
        if (withSpecials == true) {
          window.alert("So special!");
          characters+=specials;
          console.log(characters);
        } else if (withSpecials == false) { 
          window.alert("Not special!");
        }
////////////////////For Loop Character Select//////////////////////////

for (var i= 0; i < passwordLength; ++i) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
   }
//////////////Final Values///////////////////
    document.querySelector("#password").value = password;
    console.log(password);
    return password.value;
    }
