function $(element) {
	return document.getElementById(element);
}

function login() {
	if(true) {
		
	}
	alert("Welcome " + $("username").value + "!");
	document.cookie = `email="$('email').value"`;
	window.location ="./todo.html";	
}

function toRegister() {
	window.location = "../pages/registration.html";
}

function register() {
	var username = $("username");
	var email = $("email");
	var password = $("password");
	
	window.location = "../pages/todo.html";
}