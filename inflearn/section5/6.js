// Time: O(n)
// Space: O(n)
const main = (s) => {
  let result = "";
  let max = -Infinity;
  const map = new Map();

  for (let i = 0; i < s.length; i += 1) map.set(s[i], map.get(s[i]) + 1 || 0);

  for (const [key, value] of map) {
    if (max < value) {
      max = value;
      result = key;
    }
  }

  return result;
};

console.log(main("BACBACCACCBDEDE"));
