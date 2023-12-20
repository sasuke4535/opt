function login() {
	const pinMe = 1234;
	let pin = Number(document.getElementById("pin").value);

	if (pin == pinMe) {
		window.open("home.html");
	} else {
		alert("Opps! Incorrect pin. Try Again!");
	}
}
