// Title: 아나그램(1)
// 방법 1
// Time: O(n)
// Space: O(n)
// Input: AbaAeCe, baeeACA
function main(s1, s2) {
  s1 = s1.split("").sort();
  s2 = s2.split("").sort();

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) return "NO";
  }

  return "YES";
  // or return s1.join("") === s2.join("");
}

// 방법 2
// Time: O(n)
// Space: O(n)
function main(s1, s2) {
  const map = new Map();

  for (let i = 0; i < s1.length; i++) {
    map.set(s1[i], (map.get(s1[i]) || 0) + 1);
  }

  for (let i = 0; i < s2.length; i++) {
    map.set(s2[i], map.get(s2[i]) - 1);
  }

  for (const [k, v] of map) {
    if (v !== 0) return "NO";
  }

  return "YES";
}

console.log(main("AbaAeCe", "baeeACA")); // -> YES
console.log(main("abaCC", "Caaab")); // -> NO
