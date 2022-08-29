// Time: O(n log n)
// Space: O(n)
const main = (n) => {
  if (n.length === 1) return n; // 기저 조건

  const mid = Math.floor(n.length / 2); // 영역의 중간 지점
  const lp = n.slice(0, mid); // 왼쪽 영역
  const rp = n.slice(mid, n.length); // 오른쪽 영역

  return merge(main(lp), main(rp));
};

const merge = (left, right) => {
  const sortedArray = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }

  // 정렬된 배열과 나머지 두 영역을 넣어 새로운 배열 반환
  return [...sortedArray, ...left, ...right];
};

const numbers = [3, 9, 4, 7, 5, 0, 1, 6, 8, 2];
console.log(main(numbers));
