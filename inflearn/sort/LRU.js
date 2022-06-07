const solution = (size, arr) => {
  let memory = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const isCashed = memory.find((i) => i === element);
    if (isCashed) {
      const remove = memory.filter((i) => i !== element);
      memory = [element, ...remove];
    } else {
      memory.unshift(element);
    }
  }
  return memory.slice(0, 5);
};
const result = solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]);
console.log(result);

// 다른 풀이

const otherSolution = (size, arr) => {
  let result = Array.from({ length: size }, () => 0);

  for (let i = 0; i < arr.length; i++) {
    const position = result.indexOf(arr[i]);

    if (position !== -1) {
      for (let j = position; j >= 1; j--) {
        result[j] = result[j - 1];
      }
    } else {
      for (let j = result.length - 1; j >= 1; j--) {
        result[j] = result[j - 1];
      }
    }
    result[0] = arr[i];
  }

  return result;
};
