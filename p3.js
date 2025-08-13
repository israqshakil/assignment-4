function bestTeam(player1, player2) {
  if (typeof player1 !== "object" || typeof player2 !== "object") {
    return "Invalid";
  }
  let player1TotalScore = player1.foul + player1.cardY + player1.cardR;
  let player2TotalScore = player2.foul + player2.cardY + player2.cardR;
  if (player1TotalScore > player2TotalScore) {
    return player2.name;
  } else if (player1TotalScore < player2TotalScore) {
    return player1.name;
  } else {
    return "Tie";
  }
}
let p1 = { name: "Germany", foul: 10, cardY: 1, cardR: 1 };
let p2 = { name: "France", foul: 10, cardY: 2, cardR: 1 };

console.log(bestTeam(p1, p2));
