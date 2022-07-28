const roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
const solution = (string) => {
  let result = 0;
  for (let index = 0; index < string.length; index++) {
    if (roman[string[index]] < roman[string[index + 1]]) {
      result -= roman[string[index]];
    } else {
      result += roman[string[index]];
    }
  }
  return result;
};
