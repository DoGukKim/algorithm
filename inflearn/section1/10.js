// Title: 문자 찾기
// 방법 1
// Time: O(n)
// Space: O(1)
function main(s, t) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) result++;
  }

  console.log(result);
}

// 방법 2
// Time: O(n)
// Space: O(n)
function main(s, t) {
  console.log(s.split("").filter((i) => i === t).length);
}

main("COMPUTERPROGRAMMING", "R");
