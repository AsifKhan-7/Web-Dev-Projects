function getAverage(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
}
// console.log(getAverage([1, 2, 3, 4, 5, 5, 6, 7, 8]));
// console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));

function getAverage(scores) {
  let sum = 0;
  scores.forEach((score) => {
    sum = sum + score;
  });
  return sum / scores.length;
}
// console.log(getAverage([1, 2, 3, 4, 5, 5, 6, 7, 8, 88, 565, 65, 65, 77, 68]));

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}
// console.log(getGrade(96));

function hasPassingGrade(score) {
  let grade = getGrade(score);
  console.log(`Grade for ${score}: ${grade}`);
  return grade !== "F";
}
// console.log(hasPassingGrade(96));

function studentMsg(totalScores, studentScore) {
  // let classAvg = getAverage(totalScores).toFixed(1);
  // let studentGrade = getGrade(studentScore);
  // let passed = studentGrade !== "F";
  // const message = `Class average: ${classAvg}. Your grade: ${studentGrade}. You ${
  //   passed ? "passed" : "failed"
  // } the course.;`;
  // return message;

  let classAvg = getAverage(totalScores);
  let stuGrade = getGrade(studentScore);

  if (stuGrade !== "F") {
    return (
      "Class average: " +
      classAvg +
      ". Your grade: " +
      stuGrade +
      ". You passed the course."
    );
  } else {
    return (
      "Class average: " +
      classAvg +
      ". Your grade: " +
      stuGrade +
      ". You failed the course."
    );
  }
}
// console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 89));
