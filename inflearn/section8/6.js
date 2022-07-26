// Time: O(2^n)
// Space: O(n)
const main = (maxWeight, dogs) => {
  const remainder = calc(maxWeight, dogs);
  return Math.max(...remainder);
};

const calc = (maxWeight, dogs, idx = 0, sum = 0, arr = []) => {
  if (sum + dogs[idx] > maxWeight) return arr.push(sum);
  if (idx === dogs.length) return arr.push(sum);

  calc(maxWeight, dogs, idx + 1, sum + dogs[idx], arr);
  calc(maxWeight, dogs, idx + 1, sum, arr);

  return arr;
};

console.log(main(259, [81, 58, 42, 33, 61]));
