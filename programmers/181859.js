// Title: 배열 만들기 6
// Time: O(n)
// Space: O(n)
function solution(arr) {
  let i = 0;
  const result = [];

  while (i < arr.length) {
    const top = result[result.length - 1];
    if (result.length && top === arr[i]) {
      result.pop();
      i++;
      continue;
    }

    if (result.length && top !== arr[i]) result.push(arr[i]);
    if (!result.length) result.push(arr[i]);
    i++;
  }

  return result.length > 0 ? result : [-1];
}
