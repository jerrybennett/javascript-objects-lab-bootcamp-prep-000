var recipes = {

}

// function updateObjectWithKeyAndValue(object, key, value) {
//   object[key] = value
//   return object
// }

function updateObjectWithKeyAndValue1(object, key, value) {
  return Object.assign({}, object, { key: value })
}
