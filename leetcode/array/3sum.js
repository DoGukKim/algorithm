const main = (nums) => {
  const result = [];
  const hash = new Map();
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const elements = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
          hash.set(elements.join(""), elements);
        }
      }
    }
  }

  for (const [_, value] of hash) {
    result.push(value);
  }

  return result;
};
// 시간초과로 틀림
