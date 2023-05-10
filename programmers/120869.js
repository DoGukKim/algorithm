// Title: 외계어 사전
// 방법 1
// Time: O(n^2+m)
// Space: O(m)
// Input: ["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"]
function solution(spell, dic) {
  const map = new Map();

  for (let i = 0; i < spell.length; i++) {
    map.set(spell[i], (map.get(spell[i]) || 0) + 1);
  }

  for (let i = 0; i < dic.length; i++) {
    const m = new Map();
    for (const [k, v] of map) {
      m.set(k, v);
    }

    for (let j = 0; j < dic[i].length; j++) {
      const c = dic[i];
      if (!m.has(c[j])) break;
      m.set(c[j], map.get(c[j]) - 1);
      if (m.get(c[j]) === 0) m.delete(c[j]);
    }

    if (m.size === 0) return 1;
  }

  return 2;
} // -> 2
