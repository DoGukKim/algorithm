// Time: O(n^2)
// Space: O(1)
const main = (words) => {
  for (let i = 0; i < words.length; i++)
    if (words.indexOf(words[i]) === i) console.log(words[i]);
};

console.log(main(["good", "time", "good", "time", "student"]));

// Recursive
// Time: O(n^2)
// Space: O(n^2)
const recursion = (words, idx = 0) => {
  if (idx === words.length) return;

  if (words.indexOf(words[idx]) === idx) console.log(words[idx]);

  return recursion(words, idx + 1);
};

console.log(recursion(["good", "time", "good", "time", "student"]));
