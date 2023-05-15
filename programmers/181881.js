// Title: 조건에 맞게 수열 변환하기 2
// Time: O(mn)
// Space: O(1)
function solution(arr) {
  let result = 0;

  while (true) {
    const prev = arr.reduce((acc, cur) => acc + cur, 0);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 50 && arr[i] % 2 === 0) {
        arr[i] = Math.floor(arr[i] / 2);
        continue;
      }

      if (arr[i] < 50 && arr[i] % 2 === 1) {
        arr[i] = arr[i] * 2 + 1;
        continue;
      }
    }

    const after = arr.reduce((acc, cur) => acc + cur, 0);
    if (prev === after) return result;
    result++;
  }
}
