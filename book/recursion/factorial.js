// 하향식
// TimeComplexity O(n)
// SpaceComplexity O(1)
const TopDownFactorial = (n) => {
  if (n === 1) return 1;
  return n * TopDownFactorial(n - 1);
};

// 상향식
const BottomUpFactorial = (n, index = 0, result = 1) => {
  if (index > n) return result;
  return BottomUpFactorial(n, (index += 1), result * index);
};
