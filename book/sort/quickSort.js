// Time: O(n log n)
// Space: O(n)
const main = (n, left, right) => {
  // 인덱스는 분할 후 반환되는 값으로 배열의 두 번째 영역의 첫 번째 값이다.
  const index = partitioning(n, left, right); // -> 5, 4, 2 ...

  // 두 번째 영역의 인덱스 - 1이 시작점과 같을 때 즉, 첫 번째 영역의 원소가 1개라면 정렬을 할 필요가 없음으로 조건을 건다.
  // 예를 들어 시작이 0이고 반환 된 값이 1일 때 왼쪽 영역은 한 개의 요소만 존재하는 것이다.
  if (left < index - 1) {
    // 첫 번째 영역을 다시 재귀적으로 호출
    main(n, left, index - 1);
  }

  // 마찬가지로 오른쪽 영역의 요소가 1개 뿐이라면 정렬을 할 필요가 없음으로 조건을 건다.
  if (index < right) {
    // 두 번째 영역을 다시 재귀적으로 호출
    main(n, index, right);
  }

  return n;
};

const partitioning = (n, left, right) => {
  const pivot = n[Math.floor((left + right) / 2)]; // 기준 값 설정
  let lp = left;
  let rp = right;

  // 시작 점이 끝점과 같거나 커지면 범위를 벗어난 것으로 루프를 종료
  while (lp <= rp) {
    // 기준 값 보다 큰 값까지 앞으로 이동
    while (n[lp] < pivot) {
      lp++;
    }

    while (n[rp] > pivot) {
      // 기준 값 보다 작은 값까지 뒤로 이동
      rp--;
    }

    // console.log(lp, n[lp], rp, n[rp]);
    if (lp <= rp) {
      // 스왑 후 포인터들을 각 한 칸 씩 옮김
      [n[lp], n[rp]] = [n[rp], n[lp]];
      lp++;
      rp--;
    }
  }

  return lp;
};

const numbers = [3, 9, 4, 7, 5, 0, 1, 6, 8, 2];
console.log(main(numbers, 0, numbers.length - 1));
// -> [
//  0, 1, 2, 3, 4,
//  5, 6, 7, 8, 9
// ]
