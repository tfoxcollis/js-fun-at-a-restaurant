

function createRestaurant(name) {
  return {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
}

function addMenuItem(obj, item) {
  if(item.type === "breakfast") {
    for(var i = 0; i < obj.menus.breakfast.length; i++){
      if (obj.menus.breakfast[i] === item) {
        return
      }
    }
    return obj.menus.breakfast.push(item)

  } else if(item.type === "lunch"){
    for(var i = 0; i < obj.menus.lunch.length; i++){
      if (obj.menus.lunch[i] === item) {
        return
      }
    }
    return obj.menus.lunch.push(item)

  } else if(item.type === "dinner") {
    for(var i = 0; i < obj.menus.dinner.length; i++){
      if (obj.menus.dinner[i] === item) {
        return
      }
    }
    return obj.menus.dinner.push(item)
  }
}
// first attempt at removing menu item
// function removeMenuItem(restObj, name, type) {
//   for(var i = 0; i < restObj.menus.breakfast.length; i++){
//     if(restObj.menus.breakfast[i].name === name){
//       restObj.menus.breakfast.splice(i, 1);
//       return `No one is eating our ${name} - it has been removed from the breakfast menu!`
//     }
//   }
// }

function removeMenuItem(restObj, name, type){
  if(type === "breakfast"){
    for(var i = 0; i < restObj.menus.breakfast.length; i++) {
      if(restObj.menus.breakfast[i].name === name){
        restObj.menus.breakfast.splice(i,1)
        return `No one is eating our ${name} - it has been removed from the breakfast menu!`
      }
    }
  }else if(type === "lunch"){
    for(var i = 0; i < restObj.menus.lunch.length; i++){
      if(restObj.menus.lunch[i].name === name){
        restObj.menus.lunch.splice(i,1)
        return `No one is eating our ${name} - it has been removed from the lunch menu!`
      }
    }
  }else if(type === "dinner"){
    for(var i = 0; i < restObj.menus.dinner.length; i++){
      if(restObj.menus.dinner[i].name === name){
        restObj.menus.dinner.splice(i,1)
        return `No one is eating our ${name} - it has been removed from the dinner menu!`
      }
    }
  }

  return `Sorry, we don't sell ${name}, try adding a new recipe!`
}
module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
