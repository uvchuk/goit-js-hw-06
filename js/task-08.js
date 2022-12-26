const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onSumbit);

function onSumbit(event) {
	event.preventDefault();
	const {
		elements: {email, password},
	} = event.currentTarget;

	if (email.value === "" || password.value === "") {
		return alert("Fields cannot be empty!");
	}

	// console.log(`Email: ${email.value}, Password: ${password.value}`);

	// const formData = new FormData(event.currentTarget);

	// formData.forEach((value, name) => {
	// 	console.log("name:", name);
	// 	console.log("value:", value);
	// });

	const emailValue = event.currentTarget.elements.email.value;
	const passwordValue = event.currentTarget.elements.password.value;

	const formData = {
		emailValue,
		passwordValue,
	};

	console.log(formData);

	event.currentTarget.reset();
}
