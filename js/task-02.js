const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

for (let item of ingredients) {
  const list = document.createElement('li');
  list.classList.add('item');
  list.textContent = item
  const first = document.querySelector('#ingredients');
  first.appendChild(list);
}