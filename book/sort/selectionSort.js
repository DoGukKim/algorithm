// 방법 1
// Time: O(n^2)
// Space: O(1)
const main = (n) => {
  for (let i = 0; i < n.length; i++) {
    let min = i; // 시작 값

    for (let j = i + 1; j < n.length; j++) {
      if (n[j] < n[min]) min = j; // 최솟 값 갱신
    }

    [n[i], n[min]] = [n[min], n[i]]; // 스왑
  }

  return n;
};

console.log(main([13, 5, 11, 7, 23, 15]));
