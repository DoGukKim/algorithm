// Title: 대문자 찾기
// 방법 1
// Time: O(n^2) -> toUpperCase method is O(n)
// Space: O(1)
function main(s) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      result++;
    }
  }

  return result;
}

// 방법 2
// Time: O(n) -> charCodeAt() method is O(1)
// Space: O(1)
function main(s) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const charCode = s[i].charCodeAt();
    // 대문자의 아스키 코드 65 ~ 90
    if (65 <= charCode && charCode <= 90) {
      result++;
    }
  }

  return result;
}

// 방법 3
// Time: O(n)
// Space: O(n)
function main(s) {
  const us = s.toUpperCase();
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === us[i]) result++;
  }

  return result;
}

console.log(main("KoreaTimeGood")); // -> 3
