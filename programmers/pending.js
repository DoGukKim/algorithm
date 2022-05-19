const solution = (array) => {
  const map = new Map();
  for (let i = 0; i < array.length; i++) {
    if (!map.has(array[i][1])) map.set(array[i][1], 1);
    else map.set(array[i][1], map.get(array[i][1]) + 1);
  }
  const [first] = map.values();
  return first * map.size + array.length;
};
const result = solution([
  ["yellowhat", "headgear"],
  ["bluesunglasses", "eyewear"],
  ["green_turban", "headgear"],
]);
console.log(result);
