// 방법 1
// Time: O(n)
// Space: O(n)
const main = (word) => {
  let result = "";

  for (let i = 0; i < word.length; i++)
    if (word.indexOf(word[i]) === i) result += word[i];

  return result;
};

console.log(main("ksekkset"));

// 방법 2
// Time: O(n)
// Space: O(n)
const main2 = (word) => {
  return new Set(word);
};

console.log(main2("ksekkset"));

// 방법 3
// Time: O(n)
// Space: O(n)
const main3 = (word) => {
  const hashMap = new Map();

  for (let i = 0; i < word.length; i++) {
    if (!hashMap.has(word[i])) {
      hashMap.set(word[i], word[i]);
    }
  }

  return Array(...hashMap)
    .map((element) => element[1])
    .join("");
};

console.log(main3("ksekkset"));
