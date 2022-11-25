// Title: A를 #으로
// 방법 1
// Time: O(n)
// Space: O(n) -> strings require O(n) space
function main(s) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "A") {
      result += "#";
    } else result += s[i];
  }

  return result;
}

// 방법 2
// Time: O(n)
// Space: O(n)
function main(s) {
  return s.split("A").join("#");
}

// 방법 3
// Time: O(n^2)
// Space: O(n)
function main(s) {
  if (s.length === 0) return "";

  const word = main(s.slice(1));
  return s[0] === "A" ? "#" + word : s[0] + word;
}

console.log(main("BANANA")); // -> B#N#N#
