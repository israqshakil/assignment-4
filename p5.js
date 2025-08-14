function resultReport(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }
  if (marks.length === 0) {
    return { finalScore: 0, pass: 0, fail: 0 };
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
  let finalScore = Math.round(average);

  return {
    finalScore: finalScore,
    pass: p,
    fail: f,
  };
}
console.log(resultReport([99]));
