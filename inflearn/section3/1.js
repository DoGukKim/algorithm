// Title: 팰린드롬(1)
// 방법 1
// Time: O(n)
// Space: O(n)
// Input: gooG
function main(s) {
  s = s.toLowerCase();

  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return "NO";
    }
  }

  return "YES";
}

console.log(main("gooG")); // -> YES
