// Title: 컨트롤 제트
// 방법 1
// Time: O(n)
// Space: O(n)
// InputA: "1 2 Z 3", 4
// InputB: "10 20 30 40", 100
// InputC: "10 Z 20 Z 1", 1
// InputD: "1 2 3 Z Z", 1
function solution(s) {
  s = s.split(" ");

  const stack = [0];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "Z") {
      stack.pop();
    } else stack.push(stack[stack.length - 1] + Number(s[i]));
  }

  return stack[stack.length - 1];
}
