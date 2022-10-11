// Title: 중복문자제거
// 방법 1
// Time: O(n)
// Space: O(n)
// Input: ksekkset
function main(s) {
  const map = new Map();
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      result += s[i];
      map.set(s[i]);
    }
  }

  return result;
}

// 방법 2
// Time: O(n)
// Space: O(n)
function main(s) {
  return [...new Set(s)].join("");
}

console.log(main("ksekkset")); // -> kset
