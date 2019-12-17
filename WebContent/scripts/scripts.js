function $(id) {
	return document.getElementById(id);
}

function login() {
	var regex = /.{4,16}/;
	var validUser = true;
	var validPass = true;
	var input = $("username").value;
	var message = "";
	
	if(regex.test(input) == false) {
		validUser = false;
		message += "Invalid username.\n";
	}
	
	input = $("password").value;
	if(regex.test(input) == false){
		validPass = false;
		message += "Invalid password.\n";
	}
	
	if(validUser && validPass){
		alert("Welcome " + $("username").value + "!");
		document.cookie = `username="$('username').value"`;
		window.location ="./todo.html";	
	}
	else {
		alert(message);
		window.location ="./index.html";	
	}
}

function toRegister() {
	window.location = "../pages/registration.html";
}

function register() {
	var username = $("username").value;
	//var email = $("email").value;
	var password = $("password").value;
	var confirm = $("confirm").value;
	
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; /* Regular expression to verify email syntax */
	var address = document.getElementById("email").value;
	if (reg.test(address) == false)
	{
	alert('Invalid Email Address');
	document.getElementById("email").value = "";
	return (false);
	}
	
	else if(password == confirm && confirm.length > 0 && password.length > 0){
		window.location = "./index.html";
	}
	else {
		alert("Passwords do not match");
		$("password").value = "";
		$("confirm").value = "";
	}
}

/*
var checkActivity = document.getElementById("activity");
checkActivity.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        register();
    }
});



if($("password").value != "") {
	alert("Welcome " + $("username").value + "!");
	document.cookie = `username="$('username').value"`;
	window.location ="./todo.html";	
}*/