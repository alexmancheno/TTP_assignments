/*Problem 1:*/
var a = 32;
var b = 23;

console.log(a + b);

var string1 = "My name is ";
var string2 = "Alex Mancheno";

console.log(string1 + string2);

/*Problem 2:*/
var my_interests = [
  ["The Libertines", "Arctic Monkeys", "The Vaccines"], //music
  ["Mad Men", "Game of Thrones", "Mr. Robot"], //shows
  ["Going to concerts", "Running", "Coding"] //hobbies
];

console.log("My favorite music artist is " + my_interests[0][1] + " and my favorite show is " + my_interests[1][2] + ".");

/*Problem 3 + 4:*/
var user_number = prompt("Enter in a number:");
if (user_number < 100 && user_number.length > 0 && !isNaN(user_number)) {
  alert("Your number is less than 100!");
} else if (user_number >= 100 && user_number.length > 0 && !isNaN(user_number)) {
  alert("Your number, " + user_number + ", is greater than or equal to 100");
} else {
  alert("You did not enter in a number :(")
}

/*Problem 5:*/
var user_string1 = prompt("Enter in a string:");
var user_string2 = prompt("Enter in another string: ");
if (user_string1 == user_string2) {
  alert("The two strings you entered are equal!");
} else {
  alert("The two strings you entered are not equal!");
}

/*Problem 6:*/
function my_func(user_input) {
  alert("The name you entered is: " + user_input);
}

my_func(prompt("Enter in a name: "));


/*Problem 7:*/
function my_other_func() {
  console.log("This is some output");
}


/*Problem 8:*/
var entered_door = prompt("Pick a door number (from 1-4):");
var prizes = ["You won a car!", "You won a trip to Hawaii!", "You won a new Macbook Pro!", "You won a new friend!"];

if (entered_door >= 1 && entered_door <= 4) {
  alert(prizes[entered_door - 1]);
} else {
  alert("You entered an incorrect door number :(");
}
