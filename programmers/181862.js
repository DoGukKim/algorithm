// Title: 세 개의 구분자
// Time: O(n)
// Space: O(n)
function solution(myStr) {
  const result = [];
  let sum = "";

  for (let i = 0; i < myStr.length; i++) {
    if (myStr[i] === "a" || myStr[i] === "b" || myStr[i] === "c") {
      if (sum.length > 0) result.push(sum);
      sum = "";
      continue;
    }

    sum += myStr[i];
  }
  if (sum.length > 0) result.push(sum);

  return result.length > 0 ? result : ["EMPTY"];
}
