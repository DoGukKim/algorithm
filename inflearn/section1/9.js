// Title: A를 #으로
// 방법 1
// Time: O(n)
// Space: O(n)
function main(s) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "A") {
      result += "#";
      continue;
    }

    result += s[i];
  }

  console.log(result);
}

// 방법 2
// Time: O(n)
// Space: O(n)
function main(s) {
  console.log(s.split("A").join("#"));
}

main("BANANA");
