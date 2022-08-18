// 방법 1
// Time: O(n log n)
// Space: O(1)
const main = (s1, s2) => {
  s1 = s1.split("").sort();
  s2 = s2.split("").sort();

  return s1.join("") === s2.join("");
};

console.log(main("AbaAeCe", "baeeACA"));

// 방법 2
// Time: O(n)
// Space: O(n)
const main2 = (s1, s2) => {
  const hashMap = new Map();

  for (let i = 0; i < s1.length; i++) {
    hashMap.set(s1[i], (hashMap.get(s1[i]) || 0) + 1);
  }

  for (let i = 0; i < s2.length; i++) {
    hashMap.set(s2[i], hashMap.get(s2[i]) - 1);
  }

  for (const [_, value] of hashMap) {
    if (value !== 0) return false;
  }

  return true;
};

console.log(main2("AbaAeCe", "baeeACA"));
