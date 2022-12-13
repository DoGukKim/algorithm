// Title: 가장 긴 문자열
// Time: O(n)
// Space: O(n)
function main(words) {
  let result = "";
  let max = words[0].length;

  for (let i = 1; i < words.length; i++) {
    if (max < words[i].length) {
      result = words[i];
      max = words[i].length;
    }
  }

  console.log(result);
}

main(["teacher", "time", "student", "beautiful", "good"]);
