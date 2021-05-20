var login = document.getElementById("LOGIN");
var register = document.getElementById("REGISTER");
var box1 = document.getElementById("BOX1");
var box2 = document.getElementById("BOX2");
var form1 = document.getElementById("FORM1");
var form2 = document.getElementById("FORM2");

// Swiping between register area and login area;

register.addEventListener("click", function () {
  form1.style.left = "-341px";
  form2.style.top = "-380px";
});
login.addEventListener("click", function () {
  form1.style.left = "0px";
  form2.style.top = "0px";
});
// Changing the underline of the active class;
register.addEventListener("click", function () {
  if (register.className === "register") {
    register.className = "register2";
    login.className = "login2";
  } else {
    register.className = "register";
  }
});
login.addEventListener("click", function () {
  if (login.className === "login2") {
    login.className = "login";
    register.className = "register";
  } else {
    login.className = "login2";
  }
});

function showPassword() {
  var show1 = document.getElementById("SHOWPASSWORD1");
  var show2 = document.getElementById("SHOWPASSWORD2");

  if (show1.type === "password") {
    show1.type = "text";
    show2.type = "text";
  } else {
    show1.type = "password";
    show2.type = "password";
  }
}
function showPasswordnew() {
  var show3 = document.getElementById("SHOWPASSWORD3");
  if (show3.type === "password") {
    show3.type = "text";
  } else {
    show3.type = "password";
  }
}
