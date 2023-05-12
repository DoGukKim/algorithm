// Title: 배열 만들기 4
// Time: O(n)
// Space: O(n)
function solution(arr) {
  const result = [];
  let i = 0;

  while (arr.length > i) {
    if (!result.length) {
      result.push(arr[i]);
      i++;
      continue;
    }

    const top = result[result.length - 1];
    if (top < arr[i]) {
      result.push(arr[i]);
      i++;
      continue;
    }

    if (top >= arr[i]) {
      result.pop();
    }
  }

  return result;
}
