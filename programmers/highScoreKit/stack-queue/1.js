// 같은 숫자는 싫어
// Time: O(n)
// Space: O(n)
const main = (arr) => {
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (stack[stack.length - 1] !== arr[i]) {
      stack.push(arr[i]);
    }
  }

  return stack;
};

console.log(main([1, 1, 3, 3, 0, 1, 1])); // -> 1,3,0,1
console.log(main([4, 4, 4, 3, 3])); // -> 4,3
