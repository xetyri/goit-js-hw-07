const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const elemUl = document.querySelector('ul#ingredients');
const elemLiAdd = ingredients.map(ingredient => {
  const addLi = document.createElement('li');
  addLi.textContent = ingredient;
  return addLi;
});

elemUl.append(...elemLiAdd);