const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientId=document.querySelector('#ingredients');
const ingredientArr=ingredients.map(element =>{
    const ingredientItemLi =document.createElement('li');
    ingredientItemLi.classList.add('item');
    ingredientItemLi.textContent=element;

    return ingredientItemLi
  })

  ingredientId.append(...ingredientArr);
