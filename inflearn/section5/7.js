// Title: 아나그램(1)
// 방법 1
// Time: O(n log n)
// Space: O(1)
function main(s1, s2) {
  s1 = s1.split("").sort();
  s2 = s2.split("").sort();

  console.log(s1.join("") === s2.join(""));
}

// 방법 2
// Time: O(n)
// Space: O(n)
function main(s1, s2) {
  const map = new Map();

  for (let i = 0; i < s1.length; i++) map.set(s1[i], (map.get(s1[i]) || 0) + 1);

  for (let i = 0; i < s2.length; i++) map.set(s2[i], map.get(s2[i]) - 1);

  for (const [_, v] of map) {
    if (v !== 0) {
      console.log("NO");
      return;
    }
  }

  console.log("YES");
}

main("AbaAeCe", "baeeACA");
main("abaCC", "Caaab");
