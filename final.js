function totalFine(fare) {
  if (typeof fare !== "number" || fare <= 0) {
    return "Invalid";
  }
  let fine = fare + fare * 0.2 + 30;
  return fine;
}

function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  let newString = str.split(" ").join("").toUpperCase();
  return newString;
}

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

function isSame(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

function resultReport(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }
  if (marks.length === 0) {
    return {
      finalScore: 0,
      pass: 0,
      fail: 0,
    };
  }
  let total = 0;
  let p = 0;
  let f = 0;

  for (let mark of marks) {
    total += mark;
    if (mark >= 40) {
      p++;
    } else {
      f++;
    }
  }

  let average = total / marks.length;
  let result = Math.round(average);

  return {
    finalScore: result,
    pass: p,
    fail: f,
  };
}
