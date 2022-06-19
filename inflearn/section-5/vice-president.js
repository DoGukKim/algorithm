const solution = (s) => {
  let result = "";
  let max = Number.MIN_SAFE_INTEGER;
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.get(s[i]) + 1 || 0);
  }

  for (const [key, value] of map) {
    if (max < value) {
      max = value;
      result = key;
    }
  }

  return result;
};
const result = solution("BACBACCACCBDEDE");
console.log(result);
