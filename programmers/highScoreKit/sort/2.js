// 가장 큰 수

function solution(numbers) {
  var answer = "";
  numbers.sort(sortCallback);
  answer = numbers.join("");
  if (answer[0] === "0") return "0";
  return answer;
}

const sortCallback = (a, b) => {
  const a = parseInt(a.toString() + b.toString());
  const b = parseInt(b.toString() + a.toString());
  return b - a;
};

// a   b
// 106 610
// 210 102
// 210 102
// 26 62
