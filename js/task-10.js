const numberRef = document.querySelector('input[type="number"]');
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxesRef = document.querySelector("#boxes");

numberRef.addEventListener("input", onAmount);
btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

const createdBoxes = [];
let boxSize = 30;

function onAmount() {
	return numberRef.value;
}

function createBoxes(amount) {
	amount = +onAmount();

	for (let i = 0; i < amount; i += 1) {
		const boxEl = document.createElement("div");
		let size = boxSize + i * 10;
		boxEl.style.width = `${size}px`;
		boxEl.style.height = `${size}px`;
		boxEl.style.backgroundColor = getRandomHexColor();
		createdBoxes.push(boxEl);
	}
	onBoxesAppend();
}

function onBoxesAppend() {
	boxesRef.append(...createdBoxes);
}

function destroyBoxes() {
	createdBoxes.length = 0;
	boxesRef.innerHTML = "";
	numberRef.value = 0;
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
