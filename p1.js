function totalFine(fare) {
  if (typeof fare !== "number" || fare <= 0) {
    return "Invalid";
  }
  let fine = fare + fare * 0.2 + 30;
  return fine;
}
console.log(totalFine(true));
