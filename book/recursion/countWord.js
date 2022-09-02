// 방법 1
// Time: O(n*m) -> m은 문자의 길이
// Space: O(n+m)
const main = (s) => {
  const words = new Set();

  function dfs(index) {
    if (index === s.length) {
      return;
    }

    for (let i = 0; i < s[index].length; i++) {
      if (!words.has(s[index][i])) words.add(s[index][i]);
    }

    dfs(index + 1);
  }
  dfs(0);

  return words.size;
};

console.log(main(["ab", "c", "def", "ghij"])); // -> 10
console.log(main(["ab", "c", "ab", "abc"])); // -> 3

// 방법 2
// 백트랙킹
// Time: O(n^2+m) -> m은 문자의 길이
// Space: O(n+m)
const main2 = (s, words = new Set()) => {
  if (s.length === 0) {
    return;
  }

  main2(s.slice(1), words);

  for (let i = 0; i < s[0].length; i++) {
    if (!words.has(s[0][i])) words.add(s[0][i]);
  }

  return words.size;
};

// 방법 3
// Time: O(n^2+m) -> m은 문자의 길이
// Space: O(n+m)
const main3 = (s) => {
  if (s.length === 0) {
    return { words: new Set() };
  }

  const { words } = main(s.slice(1));

  for (let i = 0; i < s[0].length; i++) {
    if (!words.has(s[0][i])) words.add(s[0][i]);
  }

  return { words, size: words.size };
};

console.log(main(["ab", "c", "def", "ghij"]));
console.log(main(["ab", "c", "ab", "abc"]));
