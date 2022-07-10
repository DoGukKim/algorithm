// // TimeComplexity O(2^n)
// // SpaceComplexity O(n)
// const recursion2 = (maxWeight, dogs, level = 0, sum = 0, result = 0) => {
//   if (sum + dogs[level] > maxWeight) return result;
//   if (level === dogs.length) return result;

//   if (sum > result) result = sum;

//   recursion2(maxWeight, dogs, (level += 1), (sum += dogs[level]));
//   recursion2(maxWeight, dogs, (level += 1), sum);
// };

// console.log(recursion2(259, [81, 58, 42, 33, 61]));

const calc = () => {};

const main = (n, m) => {
  let result = 0;
  return result;
};

console.log(main(3, 2));
