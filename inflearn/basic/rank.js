// 풀이
const solution = (array) => {
  let result = [];
  for (let index = 0; index < array.length; index++) {
    const smaller = array.filter((item) => array[index] > item).length;
    result.push(array.length - smaller);
  }
  return result;
};

// 다른 사람 풀이
function otherSolution(arr) {
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
  return answer;
}
