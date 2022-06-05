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
