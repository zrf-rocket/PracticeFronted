function getIngredients(foodType) {
    let ingredients = [];

    if (foodType === 'pizza') {
        ingredients = ['cheese', 'sauce', 'pepperoni'];
    } else if (foodType === 'burger') {
        ingredients = ['bun', 'beef patty', 'lettuce', 'tomato', 'onion'];
    } else if (foodType === 'taco') {
        ingredients = ['tortilla', 'beef', 'lettuce', 'shredded cheese'];
    } else if (foodType === 'sandwich') {
        ingredients = ['bread', 'turkey', 'lettuce', 'mayo'];
    } else {
        console.log('Unknown food type');
    }

    return ingredients;
}


function getIngredients2(foodType) {
  const menu = [
    {food: 'pizza', ingredients: ['cheese', 'sauce', 'pepperoni']},
    {food: 'burger', ingredients: ['bun', 'beef patty', 'lettuce', 'tomato', 'onion']},
    {food: 'taco', ingredients: ['tortilla', 'beef', 'lettuce', 'shredded cheese']},
    {food: 'sandwich', ingredients: ['bread', 'turkey', 'lettuce', 'mayo']}
  ];


  const item = menu.find(menuItem => menuItem.food === foodType);

  if (item === undefined) {
    console.log('Unknown food type');
    return [];
  }

  return item.ingredients;
}


console.log(getIngredients("pizza"));
console.log(getIngredients2("pizza"));
