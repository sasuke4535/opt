let currentInput = "";

function operation(value) {
	if (isOperator(value)) {
		let lastChar = currentInput.slice(-1);
		if (isOperator(lastChar)) {
			currentInput = currentInput.slice(0, -1);
		}
	}
	currentInput += value;
	updateDisplay();
}

function clearDisplay() {
	currentInput = "";
	updateDisplay();
}

function del() {
	if (currentInput.length > 0) {
		currentInput = currentInput.slice(0, -1);
		updateDisplay();
	}
}

function equal() {
	try {
		let result = math.evaluate(currentInput);
		currentInput = result.toString();
		updateDisplay();
	} catch (error) {
		currentInput = "Error";
		updateDisplay();
	}
}

function updateDisplay() {
	document.getElementById("display").textContent = currentInput;
}

function isOperator(char) {
	return ["+", "-", "*", "/"].includes(char);
}
