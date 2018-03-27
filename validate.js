var firstname = document.getElementById("firstname");
var lastname = document.getElementById("lastname");
var email = document.getElementById("email");
var password = document.getElementById("psw");
var confirm = document.getElementById("confirm");
var btn = document.getElementById("btn");

var str1 = " must be only letters, space character and 2-20 characters long";
var str2 = " must be at least one uppercase letter, one lowercase letter, one number and minimum eight characters";
var msgfirst = document.getElementById("msgfirst");
var msglast = document.getElementById("msglast");
var msgpassword = document.getElementById("msgpassword");

firstname.addEventListener("input", function() {
   var regex = /^[a-zA-Z ]{2,20}$/;
   if (!regex.test(this.value)) {
     this.classList.add('err');
     msgfirst.innerHTML = str1;
   } else {
     this.classList.remove('err');
     msgfirst.innerHTML = "";
   }
});
lastname.addEventListener("input", function() {
   var regex = /^[a-zA-Z ]{2,20}$/;
   if (!regex.test(this.value)) {
     this.classList.add('err');
     msglast.innerHTML = str1;
   } else {
     this.classList.remove('err');
     msglast.innerHTML = "";
   }
});

email.addEventListener("input", function() {
   var regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
   if (!regex.test(email.value)) {
     email.classList.add('err');
   } else {
     email.classList.remove('err');
   }
});
password.addEventListener("input", function () {
   var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
   if (!regex.test(this.value)) {
     this.classList.add('err');
     msgpassword.innerHTML = str2;
   } else {
     this.classList.remove('err');
     msgpassword.innerHTML = "";
   }
});
confirm.addEventListener("input", function () {
   var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
   if (!regex.test(this.value)) {
     this.classList.add('err');
   } else {
     this.classList.remove('err');
   }
});
function checkform(){ // enable button if each inputs  filled up
  var f = document.forms["theform"].elements;
  var cansubmit = true;
  for (var i = 0; i < f.length; i++) {
    if (f[i].value.length == 0 || f[i].classList.contains("err")) cansubmit = false;
  }
  document.getElementById('btn').disabled = !cansubmit;
}
function checkPassword() { //check confirm password equals to password
  if (confirm.value != password.value) {
    confirm.classList.add('err');
  } else {
    confirm.classList.remove('err');
  }
}
