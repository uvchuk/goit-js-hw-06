const formRef = document.querySelector(".login-form");
const emailInputRef = document.getElementsByTagName("email");
const passwordInputRef = document.getElementsByTagName("password");
const btnSubmitRef = document.querySelector('button[type="submit"]');

formRef.addEventListener("submit", onSumbit);

function onSumbit(event) {
	event.preventDefault();
	const {	elements: {email, password}	} = event.currentTarget;

	if (email.value === "" || password.value === "") {
		return console.log("Fields cannot be empty!");
	}

	console.log(`Email: ${email.value}, Password: ${password.value}`);
	event.currentTarget.reset();
}
