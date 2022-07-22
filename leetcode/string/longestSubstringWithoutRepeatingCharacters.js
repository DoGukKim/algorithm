const main = (s) => {
  const hash = new Map();
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (!hash.has(s[i])) hash.set(s[i], 1);
    else if (hash.has(s[i]) && hash.get(s[i]) > 0) {
      for (const [key, value] of hash) {
        count += value;
        hash.set(key, value - 1);
      }
    }

    console.log(hash);
  }

  return count;
};

console.log(main("pwwkew"));
console.log(main("abcabcbb"));
console.log(main("bbbbbb"));
