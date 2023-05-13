// Title: 배열 만들기 5
// Time: O(n*m)
// Space: O(n)
function solution(intStrs, k, s, l) {
  const result = [];

  for (let i = 0; i < intStrs.length; i++) {
    let numString = "";
    for (let j = s; j < intStrs[i].length && j < s + l; j++) {
      numString += intStrs[i][j];
    }

    const num = Number(numString);
    if (num > k) result.push(num);
  }

  return result;
}
