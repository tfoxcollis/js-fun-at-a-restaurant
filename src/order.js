//


function takeOrder(obj, arr) {
  if (arr.length <= 2) {
    return arr.push(obj)
  }
}

function refundOrder(orderNum, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (orderNum === arr[i].orderNumber) {
      return arr.splice(i, 1)
      break
    }
  }
}

function listItems(arr) {
  var item = ""
  for (var i = 0; i < arr.length; i++) {
// line 23 adds the item to the list
    item += arr[i].item
    if (i < arr.length - 1) {
      item += "," + " "
    }
  }
  return item
}

function searchOrder(arr, item) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].item === item) {
      return true
    }

  }
  return false
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
