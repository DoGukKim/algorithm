/**
 * @param {string}
 * @return {number}
 */

var romanToInt = function (s) {
  const roman = Object.freeze({
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  });

  let result = 0;

  for (i = 0; i < s.length; i++) {
    if (roman[s[i]] < roman[s[i + 1]]) {
      result -= roman[s[i]];
      continue;
    }
    result += roman[s[i]];
  }

  return result;
};

console.log(romanToInt("MCMXCIV"));
