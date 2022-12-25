const inputRef = document.getElementById("validation-input");
const expectedLength = Number(inputRef.dataset.length);

inputRef.addEventListener("blur", onLostFocusCheckValueLength);

function onLostFocusCheckValueLength() {
	if (inputRef.value.length === expectedLength) {
		inputRef.classList.remove("invalid");
		inputRef.classList.add("valid");
	} else if (inputRef.value.length === 0) {
		inputRef.classList.remove("valid");
		inputRef.classList.remove("invalid");
	} else {
		inputRef.classList.remove("valid");
		inputRef.classList.add("invalid");
	}
}
