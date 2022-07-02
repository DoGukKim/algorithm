const solution = (size, arr) => {
  const memory = Array.from({ length: size }, () => 0);

  for (let i = 0; i < arr.length; i++) {
    const cashIndex = memory.indexOf(arr[i]);
    if (cashIndex === -1) {
      for (let j = memory.length - 1; j >= 1; j--) {
        memory[j] = memory[j - 1];
      }
    } else {
      for (let i = cashIndex; i >= 1; i--) {
        memory[i] = memory[i - 1];
      }
    }
    memory[0] = arr[i];
  }

  return memory;
};

// input
const result = solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]);

// 재풀이
const main = (size, arr) => {
  const memory = Array.from({ length: size }, () => 0);

  for (let i = 0; i < arr.length; i++) {
    const cashIndex = memory.indexOf(arr[i]);

    if (cashIndex !== -1)
      for (let j = cashIndex; j >= 1; j--) memory[j] = memory[j - 1];
    else for (let j = memory.length - 1; j >= 1; j--) memory[j] = memory[j - 1];

    memory[0] = arr[i];
  }

  console.log(memory);
};
main(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]);

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
