// 방법 1
// Time: O(n)
// Space: O(1)
const main = (words) => {
  let result = words[0];

  for (let i = 1; i < words.length; i++)
    if (result.length < words[i].length) result = words[i];

  return result;
};

console.log(main(["teacher", "time", "student", "beautiful", "good"]));

// 방법 2
// Time: O(n^2)
// Space: O(n)
const main2 = (words) => {
  function dfs(arr) {
    if (arr.length < 1) return "";
    const longWord = dfs(arr.slice(1));
    return longWord.length < arr[0].length ? arr[0] : longWord;
  }

  return dfs(words);
};

console.log(main2(["teacher", "time", "student", "beautiful", "good"]));
