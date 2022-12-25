const inputRef = document.getElementById("font-size-control");
const outputRef = document.getElementById("text");
inputRef.addEventListener("input", onChangeSize);

function onChangeSize() {
	outputRef.style.fontSize = `${inputRef.value}px`;
}
