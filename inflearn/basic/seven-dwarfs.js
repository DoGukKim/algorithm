// 풀이
const solution = (array) => {
  const map = new Map();
  const targetValue = array.reduce((acc, cur) => acc + cur, 0) - 100;
  for (let i = 0; i < array.length; i++) {
    if (map.has(targetValue - array[i])) {
      return array.filter((item, index) => {
        if (index !== i && index !== map.get(targetValue - array[i]))
          return item;
      });
    }
    map.set(array[i], i);
  }
};
const result = solution([20, 7, 23, 19, 10, 15, 25, 8, 13]);

// 다른 사람 풀이
function otherSolution(arr) {
  let answer = arr;
  let sum = answer.reduce((a, b) => a + b, 0);
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (answer[i] + answer[j]) == 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);
      }
    }
  }
  return answer;
}
