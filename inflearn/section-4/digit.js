const solution = (array) => {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    let temp = array[i];

    while (temp) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);
    }

    if (sum > max) {
      max = sum;
      answer = array[i];
    } else if (sum === max) {
      if (answer < array[i]) answer = array[i];
    }
  }
  return answer;
};

// 재귀식 풀이
const main = (arr) => {
  let result = [];
  let max = -Infinity;

  const recursion = (level = 0) => {
    if (level === arr.length) return;

    let tmp = arr[level];
    let sum = 0;

    while (tmp > 0) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }

    if (sum >= max) {
      max = sum;
      result.push(arr[level]);
    }

    recursion(level + 1);
  };
  recursion();

  console.log(Math.max(...result));
};
main([128, 460, 603, 40, 521, 137, 123]);
