// 방법 1
// Time O(n)
// Space O(n)
const main = (string, target) => {
  let result = [];
  let acc = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== target) {
      acc++;
      result.push(acc);
    } else {
      acc = 0;
      result.push(acc);
    }
  }

  acc = 0;

  for (let j = string.length - 1; j >= 0; j -= 1) {
    if (string[j] !== target) {
      acc++;
      result[j] = Math.min(result[j], acc);
    } else {
      acc = 0;
      result[j] = acc;
    }
  }

  return result;
};

console.log(main("teachermode", "e"));
