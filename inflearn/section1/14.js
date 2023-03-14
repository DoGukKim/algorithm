// Title: 가장 긴 문자열
// Time: O(n)
// Space: O(1)
function main(words) {
  let index = 0;
  let max = words[0].length;

  for (let i = 1; i < words.length; i++) {
    if (max < words[i].length) {
      index = i;
      max = words[i].length;
    }
  }

  console.log(words[index]);
}

main(["teacher", "time", "student", "beautiful", "good"]);
