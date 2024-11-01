const numbersElement = document.getElementById("numbers");
const operatorsElement = document.getElementById("operators");
const operationElement = document.getElementById("operation");
const previousOperationElement = document.getElementById("previous-operation");

const NUMBERS = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const OPERATORS = ['+', '-', '*', '/', 'mod', '**'];

let operation = [];
let previousOperations = [];

(function () {
	numbersElement.innerHTML = buildNumbersTemplate(NUMBERS);
	operatorsElement.innerHTML = buildOperatorsTemplate(OPERATORS);
})();

function buildNumbersTemplate(numbers) {
	return numbers.reduce((template, number) => {
		return template + `<li class="pad-button number">
		<button onclick="insertNumber(${number})">${number}</button>
	</li>`
	}, '');
}

function buildOperatorsTemplate(operators) {
	return operators.reduce((template, operator) => {
		return template + `<li class="pad-button operator">
		<button onclick="insertOperator('${operator}')">${operator}</button>
	</li>`
	}, '') + templateEqual();
}

function templateEqual() {
	return `<ul class="operators">
	<li class="pad-button equal">
		<button onclick="calculate()">=</button>
	</li>
</ul>`
}

function insertNumber(number) {
	if (!operation.length || !isLastOperationElementANumber(operation)) {
		operation.push(number);
	} else {
		const lastElement = operation.pop();
		operation.push('' + lastElement + number);
	}
	updateDisplay();
}

function insertOperator(operator) {
	if (!operation.length || !isLastOperationElementANumber(operation)) {
		return;
	}
	operation.push(operator);
	updateDisplay();
}

function calculate() {
	const operationText = operation.join(" ");
	const result = evaluate(operationText);
	if ((!result && result !== 0) || /^\d+$/.test(operationText.trim())) return;
	previousOperations.push(`${operationText} = ${result}`);
	operation = [result];
	updateDisplay();
}


function cleanOperations() {
	operation = [];
	previousOperations = [];
	updateDisplay();
}

function updateDisplay() {
	previousOperationElement.innerText = previousOperations.join("\n");
	operationElement.innerText = operation.join(" ");
}

function evaluate(operationText) {
	try {
		return eval(operationText.replace("mod", "%"));
	} catch (err) {
		return false;
	}
}

function isLastOperationElementANumber(operation) {
	const element = operation[operation.length - 1] * 1;
	return !isNaN(element) && typeof element === 'number';
}
