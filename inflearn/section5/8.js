// Title: 아나그램(2)
// 방법 1
// Time: O((t!*t)+(t!*s))
// Space: O(t!)
// Input: bacaAacba, abc
function main(s, t) {
  const allPermutation = [];

  function dfs(p) {
    if (t.length === p.length) {
      allPermutation.push(p.join(""));
      return;
    }

    for (let i = 0; i < t.length; i++) {
      if (p.includes(t[i])) continue;
      p.push(t[i]);
      dfs(p);
      p.pop();
    }
  }
  dfs([]);

  let result = 0;
  for (let i = 0; i < allPermutation.length; i++) {
    if (s.includes(allPermutation[i])) result++;
  }

  return result;
}

// 방법 2
// Time: O(s^2+t)
// Space: O(1) -> since variables go out of scope, loop variables will destroyed.
function main(s, t) {
  let result = 0;

  for (let lp = 0; lp < s.length; lp++) {
    const copy = s.slice(lp, lp + t.length);
    const map = new Map();

    if (copy.length !== t.length) continue;
    for (let j = 0; j < copy.length; j++) {
      map.set(copy[j], (map.get(copy[j]) || 0) + 1);
    }

    let flag = true;
    for (let k = 0; k < t.length; k++) {
      if (!map.has(t[k])) flag = false;
      map.set(t[k], map.get(t[k]) - 1);
    }

    if (!flag) continue;

    for (const [_, v] of map) {
      if (v !== 0) break;
    }

    result++;
  }

  return result;
}

console.log(main("bacaAacba", "abc")); // -> 3

// 방법 3
// Time: O(n^2)
// Space: O(1)
const main = (str1, str2) => {
  let result = 0;

  for (let i = 0; i < str1.length; i++) {
    let sum = "";
    let pointer = i;
    let count = str2.length;

    while (count--) {
      sum += str1[pointer++];
    }

    const sorted = sum.split("").sort().join("");
    if (sorted === str2) result++;
  }

  return result;
};
