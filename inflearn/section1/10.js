// Title: 문자 찾기
// 방법 1
// Time: O(n)
// Space: O(1)
function main(s, t) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      result++;
    }
  }

  console.log(result);
}

// 방법 2
// Time: O(n)
// Space: O(n)
function main(s, t) {
  console.log(s.split("").filter((i) => i === t).length);
}

// 방법 3
// Time: O(n^2)
// Space: O(n)
function main(s, t) {
  if (s.length === 0) return 0;

  const cnt = main(s.slice(1), t);
  return s[0] === t ? cnt + 1 : cnt;
}

main("COMPUTERPROGRAMMING", "R");
