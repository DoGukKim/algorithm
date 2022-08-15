// 방법 1
// Time: O(n)
// Space: O(n)
const main = (word) => {
  let result = "";

  for (let i = 0; i < word.length; i++) {
    if (word[i] === "A") {
      result += "#";
      continue;
    }

    result += word[i];
  }

  return result;
};

console.log(main("BANANA"));

// 방법 2
// Time: O(n)
// Space: O(n)
const main2 = (word) => {
  return word.split("A").join("#");
};

console.log(main2("BANANA"));

// 방법 3
// Time: O(n^2)
// Space: O(n)
const main3 = (word) => {
  function dfs(s) {
    if (s.length < 1) return "";

    const sum = dfs(s.slice(1));
    return s[0] !== "A" ? s[0] + sum : "#" + sum;
  }
  return dfs(word);
};

console.log(main3("BANANA"));

// 방법 4
// Time: O(n^2)
// Space: O(n)
const main4 = (word) => {
  let result = "";
  function dfs(index) {
    if (index === word.length) {
      return;
    }

    if (word[index] === "A") {
      result += "#";
    } else result += word[index];

    dfs(index + 1);
  }
  dfs(0);

  return result;
};

console.log(main4("BANANA"));
