// Title: 뮤직 비디오
// Time: O(log n)
// Space: O(1)
const main = (n, m) => {
  let lp = n;
  let rp = (n + 1) * (n / 2);
  let result = 0;

  while (lp <= rp) {
    const mid = Math.floor((lp + rp) / 2);
    let sum = 0;
    let dvd = 1; // 1장 부터 시작

    for (let i = 1; i <= n; i++) {
      if (sum + i > mid) {
        // 누적 분량이 dvd 1장의 공간 보다 커지면 dvd 1장 추가하고
        // sum은 현재 노래로 재할당
        dvd++;
        sum = i;
      } else {
        sum += i;
      }
    }

    if (dvd <= m) {
      // 장수가 m 보다 작거나 같으면 여유가 있는 분량으로 줄여나가면서 다시 이분 검색
      result = mid;
      rp = mid - 1;
    } else {
      // 여유가 없으니 분량을 증가시켜 다시 이분 검색
      lp = mid + 1;
    }
  }

  console.log(result);
};

main(9, 3);

function main(n, m, songs) {}

main(9, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
