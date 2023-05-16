// Title: qr code
// Time: O(n)
// Space: O(n)
function solution(q, r, code) {
  let result = "";

  for (let i = 0; i < code.length; i++) {
    if (i % q === r) result += code[i];
  }

  return result;
}
