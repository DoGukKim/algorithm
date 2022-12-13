// Title: 중복단어제거
// 방법 1
// Time: O(n)
// Space: O(n)
function main(words) {
  const result = [];
  const map = new Map();

  for (let i = 0; i < words.length; i++) {
    if (!map.has(words[i])) {
      map.set(words[i]);
      result.push(words[i]);
    }
  }

  console.log(result);
}

// 방법 2
// Time: O(n)
// Space: O(n)
function main(words) {
  console.log([...new Set(words)]);
}

main(["good", "time", "good", "time", "student"]);
