// Title: 숨어있는 숫자의 덧셈 (2)
// 방법 1
// Time: O(n)
// Space: O(n)
// Input: "aAb1B2cC34oOp"
function solution(my_string) {
  let result = 0;
  let sum = "";

  for (let i = 0; i < my_string.length; i++) {
    if (!isNaN(my_string[i])) sum += my_string[i];
    if (isNaN(my_string[i + 1])) {
      result += Number(sum);
      sum = "";
    }
  }

  return result;
} // -> 37

// otherSolution
function solution(my_string) {
  const nums = my_string.match(/[0-9]+/g);
  return nums ? nums.map((num) => +num).reduce((a, c) => a + c, 0) : 0;
}
