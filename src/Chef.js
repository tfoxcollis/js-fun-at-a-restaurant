class Chef {
  constructor(name, restaurant) {
    this.name = name
    this.restaurant = restaurant

  }

  greetCustomer(name, conditional) {
    if(conditional === true){
      return `Good morning, ${name}!`
    }
    return `Hello, ${name}!`
  }

  checkForFood(foodObject) {
    if(foodObject.type === "breakfast"){
      for(var i = 0; i < this.restaurant.menus.breakfast.length; i++ ) {
        if(this.restaurant.menus.breakfast[i] === foodObject) {
          return `Yes, we're serving ${foodObject.name} today!`
        }
      }
    } else if(foodObject.type === "lunch"){
      for(var i = 0; i < this.restaurant.menus.lunch.length; i++ ) {
        if(this.restaurant.menus.lunch[i] === foodObject) {
          return `Yes, we're serving ${foodObject.name} today!`
        }
      }
    } else if(foodObject.type === "dinner"){
      for(var i = 0; i < this.restaurant.menus.dinner.length; i++ ) {
        if(this.restaurant.menus.dinner[i] === foodObject) {
          return `Yes, we're serving ${foodObject.name} today!`
        }
      }
    }
    return `Sorry, we aren't serving ${foodObject.name} today.`
  }
}

module.exports = Chef;
