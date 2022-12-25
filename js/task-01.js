const categories = document.getElementsByClassName("item");

const numberOfCategories = `Number of categories: ${categories.length}`;

console.log(numberOfCategories);

for (const category of categories) {
  const categoryName = category.firstElementChild.textContent;
  const categoryElements = category.lastElementChild.children.length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
}
