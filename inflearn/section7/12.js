// 방법 1
// Time: O(log n)
// Space: O(1)
const main = (n, m) => {
  // 마구간 정렬
  n.sort((a, b) => a - b);

  let lp = 1; // 1인 이유는 마구간의 좌표가 1부터이기 때문에.
  let rp = n[n.length - 1];
  let result = 0;

  while (lp <= rp) {
    const mid = Math.floor((lp + rp) / 2); // 마구간 간의 최소한의 거리
    let horse = 1; // 말 하나를 시작점에 놓고
    let recentPos = n[0]; // 말 시작점 초기 값 할당

    for (let i = 1; i < n.length; i++) {
      if (n[i] - recentPos >= mid) {
        // 현재 마구간의 거리와 지난 마구간 위치를 뺏을 때 최소한의 거리와 같거나 크면 말 넣어주고
        // 지난 위치 재할당
        horse++;
        recentPos = n[i];
      }
    }

    if (horse >= m) {
      // 넣어야 하는 말 만큼 넣었으면 최소한의 거리 삽입
      // 더 큰 최소거리 값을 찾기 위해 다시 이분검색
      result = mid;
      lp = mid + 1;
    } else {
      // 말이 다 안들어 갔기 때문에 더 큰 범위 제거
      rp = mid - 1;
    }
  }

  return result;
};

console.log(main([1, 2, 8, 4, 9], 3));
