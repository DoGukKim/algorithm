// Title: A를 #으로
// 방법 1
// Time: O(n)
// Space: O(n)
function main(s) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "A") {
      result += "#";
    } else result += s[i];
  }

  console.log(result);
}

// 방법 2
// Time: O(n)
// Space: O(n)
function main(s) {
  console.log(s.split("A").join("#"));
}

// 방법 3
// Time: O(n^2)
// Space: O(n)
function main(s) {
  if (s.length === 0) return "";

  const word = main(s.slice(1));
  return s[0] === "A" ? "#" + word : s[0] + word;
}

main("BANANA");
