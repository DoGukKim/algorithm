const solution = (arr, stack = []) => {
  if (arr.length === 1) {
    if (arr[0] % 2) return null;
    else {
      stack.push(arr[0]);
      return stack;
    }
  }
  if (arr[0] % 2) return solution(arr.slice(1, arr.length), stack);
  else {
    stack.push(arr[0]);
    return solution(arr.slice(1, arr.length), stack);
  }
};
