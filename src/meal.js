function nameMenuItem(food) {
  return "Delicious " + food
}

function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type
  }
}

function addIngredients(ingredient, ingredArr) {
  if(ingredArr.indexOf(ingredient) === -1) {
    return ingredArr.push(ingredient)
  }
}

function formatPrice(numPrice) {
  return "$" + numPrice.toString()

}

function decreasePrice(price) {
  return price * .9
}

function createRecipe(title, ingredients, type) {
  return {
    title: title,
    ingredients: ingredients,
    type: type
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
