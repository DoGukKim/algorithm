// Title: 팰린드롬(1)
// 방법 1
// Time: O(n)
// Space: O(1)
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

// 방법 2
// Time: O(n)
// Space: O(1)
function main(s) {
  s = s.toLowerCase();

  let lp = 0;
  let rp = s.length - 1;
  let isPalindrome = true;

  while (lp <= rp) {
    if (s[lp++] !== s[rp--]) {
      isPalindrome = false;
      break;
    }
  }

  console.log(isPalindrome ? "YES" : "NO");
}

main("gooG");
