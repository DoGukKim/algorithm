// Time: O(n^m)
// Space: O(m^2)
const canConstruct = (target, wordBank) => {
  if (target === "") return true;

  for (let i = 0; i < wordBank.length; i++) {
    if (target.indexOf(wordBank[i]) === 0) {
      const suffix = target.slice(wordBank[i].length);
      if (canConstruct(suffix, wordBank) === true) {
        return true;
      }
    }
  }

  return false;
};

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // -> true
console.log(
  canConstruct("skateboard", ["bo", "rd", "ate", "t", "sk", "ska", "boar"])
); // -> false

// Time: O(n*m^2)
// Space: O(m^2)
const canConstructM = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return true;

  for (let i = 0; i < wordBank.length; i++) {
    if (target.indexOf(wordBank[i]) === 0) {
      const suffix = target.slice(wordBank[i].length);
      if (canConstructM(suffix, wordBank, memo) === true) {
        memo[target] = true;
        return true;
      }
    }
  }

  memo[target] = false;
  return false;
};

console.log(canConstructM("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // -> true
console.log(
  canConstructM("skateboard", ["bo", "rd", "ate", "t", "sk", "ska", "boar"])
); // -> false
