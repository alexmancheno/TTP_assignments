document.body.style.backgroundColor = "tan";

/*Problem 1:*/
var left_button = document.getElementById("left_button");
var right_button = document.getElementById("right_button");

function buttonWar(e) {

  if (this === left_button) {
    document.getElementById("left-text").innerHTML = "I'm right!";
    document.getElementById("right-text").innerHTML = "";
  } else if (this === right_button) {
    document.getElementById("left-text").innerHTML = "";
    document.getElementById("right-text").innerHTML = "No, I'm right!";
  }
}

left_button.addEventListener("click", buttonWar);
right_button.addEventListener("click", buttonWar);

/*Problem 2:*/
function doNotHover(e) {
  alert("Hey, I told you not to hover over me!");
}

document.getElementById("unfriendly_headline").addEventListener("mouseover", doNotHover);

/*Problem 3:*/
function displayKey(e) {
  document.getElementById("box_with_listener").innerText = e.key;
}
document.addEventListener("keypress", displayKey);

/*Problem 4:*/
function checkForm(e) {
  e.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var pw_regex = /[0-9]+/;
  var username_correct = false;
  var passworld_correct = false;

  if (!pw_regex.test(username)) {
    alert("Your username does not contain a number.");
  } else {
    username_correct = true;
  }

  if (password !== "123456789") {
    alert("The password did not match");
  } else {
    password_correct = true;
  }

  if (username_correct && password_correct) {
    document.getElementById("ask_user_header").innerText = "Hello, " + username;
  }
}

document.getElementById("login_fields").addEventListener("submit", checkForm);
