// TimeComplexity O(n^2)
// SpaceComplexity O(1)
const main = (maxWeight, dogs) => {
  let result = -Infinity;

  for (let i = 0; i < dogs.length; i += 1) {
    let sum = dogs[i];

    for (let j = 0; j < dogs.length; j += 1)
      if (i !== j && sum + dogs[j] < maxWeight) sum += dogs[j];

    if (sum > result) result = sum;
  }

  return result;
};

console.log(main(259, [81, 58, 42, 33, 61]));

// Recursive
// TimeComplexity O(n^2)
// SpaceComplexity O(1)
const calc = (maxWeight, dogs, current, sum = 0, level = 0) => {
  if (level === dogs.length) return sum;
  if (sum >= maxWeight) return sum;

  if (level !== current) sum += dogs[level];

  return calc(maxWeight, dogs, current, sum, (level += 1));
};

const recursion = (maxWeight, dogs) => {
  let result = -Infinity;

  for (let i = 0; i < dogs.length; i += 1) {
    const sum = calc(maxWeight, dogs, i);
    if (sum > result) result = sum;
  }

  return result;
};

console.log(recursion(259, [81, 58, 42, 33, 61]));
