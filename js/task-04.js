const valueRef = document.getElementById("value");
const btnIncrRef = document.querySelector('[data-action="increment"]');
const btnDecrRef = document.querySelector('[data-action="decrement"]');

let counterValue = valueRef.textContent;
counterValue = 0;

btnIncrRef.addEventListener("click", increaseValue);
btnDecrRef.addEventListener("click", decreaseValue);

function increaseValue() {
	counterValue += 1;
	valueRef.textContent = counterValue;
	console.log(`"Increase value for 1, current value:" ${counterValue}`);
}

function decreaseValue() {
	counterValue -= 1;
	valueRef.textContent = counterValue;
	console.log(`"Decrease value for 1, current value:" ${counterValue}`);
}
