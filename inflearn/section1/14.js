// Title: 가장 긴 문자열
// 방법 1
// Time: O(n)
// Space: O(n)
function main(words) {
  let max = words[0].length;
  let result = "";

  for (let i = 1; i < words.length; i++) {
    if (max < words[i].length) {
      result = words[i];
      max = words[i].length;
    }
  }

  return result;
}

console.log(main(["teacher", "time", "student", "beautiful", "good"])); // -> beautiful
