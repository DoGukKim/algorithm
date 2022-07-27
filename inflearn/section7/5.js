// Time: O(n)
// Space: O(n)
const main = (size, arr) => {
  const memory = Array.from({ length: size }, () => 0);

  for (let i = 0; i < arr.length; i += 1) {
    const cashIndex = memory.indexOf(arr[i]);

    if (cashIndex !== -1)
      for (let j = cashIndex; j >= 1; j -= 1) memory[j] = memory[j - 1];
    else
      for (let j = memory.length - 1; j >= 1; j -= 1) memory[j] = memory[j - 1];

    memory[0] = arr[i];
  }

  return memory;
};

console.log(main(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
