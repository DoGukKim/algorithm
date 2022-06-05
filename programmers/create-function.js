// 풀이
const solution = (p, s) => {
  const answer = [];
  const queue = [];

  for (let i = 0; i < p.length; i++) {
    let temp = p[i];
    let spendCount = 0;
    while (temp < 100) {
      temp += s[i];
      spendCount++;
    }
    queue.push(spendCount);
  }

  let spendCount = 1;
  for (let j = 0; j < p.length; j++) {
    const temp = queue.shift();
    if (temp >= queue[0]) {
      spendCount++;
      continue;
    } else {
      answer.push(spendCount);
      spendCount = 1;
    }
  }

  return answer;
};

const result = solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]);
console.log(result);

// 다른 사람 풀이
function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  let maxDay = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}
