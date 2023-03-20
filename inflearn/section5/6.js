// Title: 학급 회장
// Time: O(n)
// Space: O(n)
function main(n, str) {
  const map = new Map();
  let max = 0;

  for (let i = 0; i < n; i++) {
    map.set(str[i], (map.get(str[i]) || 0) + 1);
    max = Math.max(max, map.get(str[i]));
  }

  for (const [k, v] of map) if (max === v) console.log(k);
}

main(15, "BACBACCACCBDEDE");
