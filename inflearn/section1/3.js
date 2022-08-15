// 방법 1
// Time: O(1)
// Space: O(1)
const main = (n) => {
  return Math.ceil(n / 12);
};

console.log(main(25));

// 방법 2 (재귀)
// Time: O(n) -> n / 12지만 러프하게 n
// Space: O(n) -> 위와 같음
const main2 = (n) => {
  function dfs(pencils, das) {
    if (pencils > n) return das;
    return dfs(pencils + 12, das + 1);
  }

  // 12자루씩 더해가면서 다스 1씩 추가
  return dfs(0, 0);
};

console.log(main2(25));
