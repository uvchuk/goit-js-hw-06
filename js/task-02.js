const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.getElementById("ingredients");

const ingredient = ingredients.forEach((ingredient) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add("item");
  list.append(ingredientEl);
});
