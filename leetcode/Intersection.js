// 풀이
// 81 ms 44.5 MB
const solution = (nums1, nums2) => {
  const hash = new Map();
  const set = new Set();
  const result = [];
  for (let i = 0; i < nums1.length; i++) {
    hash.set(nums1[i], true);
  }
  for (let j = 0; j < nums2.length; j++) {
    if (hash.has(nums2[j])) {
      set.add(nums2[j]);
    }
  }
  set.forEach((i) => result.push(i));
  return result;
};

// 다른 사람 풀이
// 60 ms 34.8 MB
const intersection = (nums1, nums2) => {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  return [...set1].filter((n) => set2.has(n));
};

// 회고
// 중복 처리를 따로 함으로 거기서 발생하는 추가적인 메모리 및 속도 저하가 발생함.
// 다른 사람 풀이는 Set 자료구조를 통해서 중복 값을 자동으로 처리했고, 그 후 처리만 해줌으로서 메모리 속도 최적화.
