// Title: 10부제
// 방법 1
// Time: O(n)
// Space: O(1)
// InputA: 3, 25 23 11 47 53 17 33
// InputB: 0, 12 20 54 30 87 91 30
function main(n, cars) {
  let result = 0;

  for (let i = 0; i < cars.length; i++) {
    if (cars[i] % 10 === n) {
      result++;
    }
  }

  return result;
}

// 방법 2
// Time: O(n^2)
// Space: O(n)
function main(n, cars) {
  if (cars.length === 0) return 0;

  const count = main(n, cars.slice(1));

  return cars[0] % 10 === n ? count + 1 : count;
}

console.log(main(3, [25, 23, 11, 47, 53, 17, 33])); // -> 3
console.log(main(0, [12, 20, 54, 30, 87, 91, 30])); // -> 3
