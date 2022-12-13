// Title: 학급 회장
// Time: O(n)
// Space: O(n)
function main(s) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }

  let result = "";
  let max = -Infinity;

  for (const [k, v] of map) {
    if (max < v) {
      max = v;
      result = k;
    }
  }

  return result;
}

main("BACBACCACCBDEDE");
