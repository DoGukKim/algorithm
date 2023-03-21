// Title: 아나그램(2)
// 방법 1
// Time: O(s*t)
// Space: O(t)
function main(s, t) {
  const sHash = new Map();
  const tHash = new Map();

  for (let i = 0; i < t.length; i++) {
    tHash.set(t[i], (tHash.get(t[i]) || 0) + 1);
  }

  let lt = 0;
  let result = 0;
  for (let rt = 0; rt < s.length; rt++) {
    sHash.set(s[rt], (sHash.get(s[rt]) || 0) + 1);

    while (rt - lt > t.length - 1) {
      sHash.set(s[lt], sHash.get(s[lt]) - 1);
      if (sHash.get(s[lt]) === 0) {
        sHash.delete(s[lt]);
      }
      lt++;
    }

    if (compareMap(sHash, tHash)) result++;
  }

  console.log(result);

  function compareMap(sm, tm) {
    if (sm.size !== tm.size) return false;
    for (const [k, v] of sm) {
      if (!tm.has(k) || tm.get(k) !== v) return false;
    }

    return true;
  }
}

// 방법 2
// Time: O(s)
// Space: O(t)
function main(s, t) {
  let hash = new Map();

  for (let i = 0; i < t.length; i++) {
    hash.set(t[i], (hash.get(t[i]) || 0) + 1);
  }

  for (let i = 0; i < t.length - 1; i++) {
    hash.set(s[i], (hash.get(s[i]) || 0) - 1);
    if (hash.get(s[i]) === 0) hash.delete(s[i]);
  }

  let lt = 0;
  let result = 0;
  for (let rt = t.length - 1; rt < s.length; rt++) {
    hash.set(s[rt], (hash.get(s[rt]) || 0) - 1);
    if (hash.get(s[rt]) === 0) hash.delete(s[rt]);
    if (hash.size === 0) result++;

    hash.set(s[lt], (hash.get(s[lt]) || 0) + 1);
    if (hash.get(s[lt]) === 0) hash.delete(s[lt]);
    if (hash.size === 0) result++;
    lt++;
  }

  console.log(result);
}

main("bacaAacba", "abc");
