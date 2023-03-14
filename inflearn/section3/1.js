// Title: 팰린드롬
// Time: O(n)
// Space: O(n)
function main(s) {
  s = s.toLowerCase();

  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      console.log("NO");
      return;
    }
  }

  console.log("YES");
}

main("gooG");
