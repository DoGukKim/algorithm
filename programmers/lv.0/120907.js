// Title: OX퀴즈
// 방법 1
// Time: O(n)
// Space: O(n)
// Input: ["3 - 4 = -3", "5 + 6 = 11"]
function solution(quiz) {
  const result = [];

  for (let i = 0; i < quiz.length; i++) {
    const [x, o, y, _, n] = quiz[i].split(" ");

    if (o === "+") {
      if (Number(x) + Number(y) === Number(n)) result.push("O");
      else result.push("X");
    }

    if (o === "-") {
      if (Number(x) - Number(y) === Number(n)) result.push("O");
      else result.push("X");
    }
  }

  return result;
} // -> ["X", "O"]
