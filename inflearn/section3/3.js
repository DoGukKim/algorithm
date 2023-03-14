// Title: 숫자만 추출
// 방법 1
// Time: O(n)
// Space: O(n)
function main(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) result += str[i];
  }

  console.log(parseInt(result));
}

// 방법 2
// Time: O(n)
// Space: O(n)
function main(str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (!stack.length && str[i] === "0") continue;
    if (!isNaN(str[i])) stack.push(str[i]);
  }

  console.log(stack.join(""));
}

main("g0en2T0s8eSoft");
