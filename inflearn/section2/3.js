// Title: 가위 바위 보
// Time: O(n)
// Space: O(1)
const main = (n, A, B) => {
  // 이기는 상황을 해시로 저장
  const caseMap = Object.freeze({
    1: 3,
    2: 1,
    3: 2,
  });

  for (let i = 0; i < n; i++) {
    if (A[i] === B[i]) {
      console.log("D");
      continue;
    }

    if (caseMap[A[i]] === B[i]) {
      console.log("A");
      continue;
    }

    console.log("B");
  }
};

main(5, [2, 3, 3, 1, 3], [1, 1, 2, 2, 3]);
