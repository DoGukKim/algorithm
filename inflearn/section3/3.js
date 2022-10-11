// Title: 숫자만 추출
// 방법 1
// Time: O(n)
// Space: O(n)
// Input: g0en2T0s8eSoft
function main(s) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
      result += s[i];
    }
  }

  return parseInt(result);
}

// 방법 2
// Time: O(n^2)
// Space: O(n)
function main(s) {
  const numbers = "1234567890";
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (numbers.includes(s[i])) {
      result += s[i];
    }
  }

  return parseInt(result);
}

console.log(main("g0en2T0s8eSoft")); // -> 208
