// Title: 과제 안 내신 분?
// Time: O(1)
// Space: O(1)
const s = Array.from({ length: 30 }, () => 0);

for (let i = 0; i < input.length; i++) {
  s[input[i] * 1 - 1] = 1;
}

for (let i = 0; i < s.length; i++) {
  if (s[i] === 0) console.log(i + 1);
}
