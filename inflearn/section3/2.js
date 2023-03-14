// Title: 유효한 팰린드롬
// Time: O(n)
// Space: O(n)
const main = (s) => {
  s = s.toLowerCase().replace(/[^a-z]/g, "");

  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      console.log("NO");
      return;
    }
  }

  console.log("YES");
};

console.log(main("found7, time: study; Yduts; emit, 7Dnuof"));
