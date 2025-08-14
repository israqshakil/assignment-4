function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  let newString = str.replace(/\s/g, "").toUpperCase();
  return newString;
}
console.log(onlyCharacter());
