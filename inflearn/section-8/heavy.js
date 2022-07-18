// TimeComplexity O(2^n)
// SpaceComplexity O(n^2)
const main = (maxWeight, dogs) => {
  const remainder = calc(maxWeight, dogs);
  return Math.max(...remainder);
};

const calc = (maxWeight, dogs, index = 0, sum = 0, arr = []) => {
  if (sum + dogs[index] > maxWeight) return arr.push(sum);
  if (index === dogs.length) return arr.push(sum);

  calc(maxWeight, dogs, index + 1, sum + dogs[index], arr);
  calc(maxWeight, dogs, index + 1, sum, arr);

  return arr;
};

console.log(main(259, [81, 58, 42, 33, 61]));
