var recipes = {

}
function updateObjectWithKeyAndValue(object, key, value) {
  // object[key] = value
  // return object
  return Object.assign({}, object, { key: value })
}
