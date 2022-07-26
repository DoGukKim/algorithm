// Time: O(2^n) // not sure..
// Space: O(n)
const main = (numbers) => {
  // 모든 경우의 부분 집합의 합
  const remainder = recursion(numbers);

  for (let i = 0; i < remainder.length; i += 1)
    // 모든 경우의 부분 집합의 합에서 중복된 합이 있다면 합이 같은 부분집합이 존재함
    if (i !== remainder.indexOf(remainder[i])) return "YES";

  return "NO";
};

const recursion = (numbers, idx = 0, sum = 0, combination = []) => {
  if (idx === numbers.length) return combination.push(sum);

  recursion(numbers, idx + 1, sum + numbers[idx], combination);
  recursion(numbers, idx + 1, sum, combination);

  return combination;
};

console.log(main([1, 3, 5, 6, 7, 10]));
