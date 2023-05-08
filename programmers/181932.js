// Title: 코드 처리하기
// Time: O(n)
// Space: O(n)
function solution(code) {
  let result = "";
  let mode = 0;

  for (let i = 0; i < code.length; i++) {
    if (code[i] === "1") {
      if (mode === 1) mode = 0;
      else mode = 1;
      continue;
    }

    if (mode === 0 && i % 2 === 0) result += code[i];
    if (mode === 1 && i % 2 !== 0) result += code[i];
  }

  return result.length < 1 ? "EMPTY" : result;
}
