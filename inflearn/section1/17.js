// Title: 중복단어제거
// 방법 1
// Time: O(n^2)
// Space: O(n)
// Input: good, time, good, time, student
function main(words) {
  const result = [];

  for (let i = 0; i < words.length; i++) {
    if (i === words.indexOf(i)) {
      result.push(words[i]);
    }
  }

  return result;
}

// 방법 2
// Time: O(n)
// Space: O(n)
function main(words) {
  return [...new Set(words)];
}

console.log(main(["good", "time", "good", "time", "student"])); // -> [ 'good', 'time', 'student' ]
