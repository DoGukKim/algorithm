// 방법 1
// n: numbers, m:size
// Time: O(n*m)
// Space: O(m)
const main = (size, n) => {
  const memory = Array.from({ length: size }, () => 0);

  for (let i = 0; i < n.length; i++) {
    const cashIndex = memory.indexOf(n[i]);

    if (cashIndex !== -1)
      // 캐시가 있으면
      for (let j = cashIndex; j >= 1; j--) memory[j] = memory[j - 1];
    // 캐시가 없으면
    else for (let j = memory.length - 1; j >= 1; j--) memory[j] = memory[j - 1];

    memory[0] = n[i];
  }

  return memory;
};

console.log(main(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
