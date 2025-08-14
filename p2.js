function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  let newString = str.split(" ").join("").toUpperCase();
  return newString;
}
console.log(onlyCharacter("sjyrt hgio ///..,."));
