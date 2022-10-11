// Title: 문자 찾기
// 방법 1
// Time: O(n)
// Space: O(1)
// Input: COMPUTERPROGRAMMING, R

function main(s, w) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === w) {
      result++;
    }
  }
  return result;
}

// 방법 2
// Time: O(n^2)
// Space: O(n)
function main(s, w) {
  if (s.length === 0) return 0;

  const count = main(s.slice(1), w);
  return s[0] === w ? count + 1 : count;
}

console.log(main("COMPUTERPROGRAMMING", "R")); // -> 3
