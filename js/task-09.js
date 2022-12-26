const bodyRef = document.querySelector("body");
const btnColorChangeRef = document.querySelector("button.change-color");
const colorValueRef = document.querySelector(".color");

btnColorChangeRef.addEventListener("click", onChangeBGColor);

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onChangeBGColor() {
	colorValueRef.textContent = getRandomHexColor();
	bodyRef.style.backgroundColor = colorValueRef.textContent;
}
