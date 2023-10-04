var array = [2, 45, 56, 78, 5, 20, 60, 18, 12];
for (let i = 0; i < array.length; i++) {
  if (array[i] % 3 == 0 && array[i] % 5 == 0) {
    document.write("FizzBuzz <br>");
  } else if (array[i] % 3 == 0) {
    document.write("Fizz <br>");
  } else if (array[i] % 5 == 0) {
    document.write("Buzz <br>");
  } else {
    document.write("Invalid number <br>");
  }
}

// var my = ["f", "a", "s", "i", "h", "a"];
var myName =prompt("Enter Name to check palindrome");
var reverse = [];
for (var i = myName.length - 1; i >= 0; i--) {
  reverse.push(myName[i]);
}
reverse = reverse.join("");
console.log(reverse);
if (myName == reverse) {
  console.log("Its Palindrome");
} else {
  console.log("its not a palindrome");
}


//Task: count down on js setInterval or setTimeOut
// library or framework ka difference
// undefine and null
// deep copy vs shellow copy
// promises,map,filter,push,pop.find vs filter,for each
