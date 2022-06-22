// ver1
const solution = (n, result = "") => {
  if (n === 0) return result.split("").reverse().join("");
  result += String(n % 2);
  return solution(Math.floor(n / 2), result);
};

// ver2
const otherSolution = (n) => {
  let result = "";

  function recursion(n) {
    if (n === 0) return 1;
    recursion(Math.floor(n / 2));
    result += String(n % 2);
  }
  recursion(n);

  return result;
};

const result = solution(5);
console.log(result);
