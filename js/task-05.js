const inputRef = document.getElementById("name-input");
const outputRef = document.getElementById("name-output");

inputRef.addEventListener("input", onUserName);

function onUserName() {
	if (inputRef.value !== "") {
		outputRef.textContent = inputRef.value;
	} else {
		outputRef.textContent = "Anonymous";
	}
}
