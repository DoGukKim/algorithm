// 체육복
// Time: O(n^2)
// Space: O(n)
const main = (n, lost, reserve) => {
  const hashMap = new Map();

  for (let i = 1; i <= n; i++) {
    // 기본적으로 학생들은 체육복을 챙겨 왔기에 1로 초기 값을 설정
    hashMap.set(i, 1);
  }

  for (const [k, _] of hashMap) {
    // 어차피 이 로직을 통해서 lost, reserve 둘 다 있더라도 계산이 된다.
    if (lost.includes(k)) {
      // lost에 있는 상태라면 - 1
      hashMap.set(k, hashMap.get(k) - 1);
    }

    if (reserve.includes(k)) {
      // reserve에 있는 상태라면 + 1
      hashMap.set(k, hashMap.get(k) + 1);
    }
  }

  let result = 0;

  for (const [k, v] of hashMap) {
    if (v < 1) {
      // 체육복이 부족한 친구라면 앞과 뒷 친구의 여벌 상태를 보고 빌려입으면서
      // 빌려준 친구의 여벌 수를 갱신해 준다.
      if (hashMap.get(k - 1) > 1) {
        result++;
        hashMap.set(k - 1, hashMap.get(k - 1) - 1);
      } else if (hashMap.get(k + 1) > 1) {
        result++;
        hashMap.set(k + 1, hashMap.get(k + 1) - 1);
      }

      continue;
    }

    result++;
  }

  return result;
};

console.log(main(5, [2, 4], [1, 3, 5])); // -> 5
console.log(main(5, [1, 2], [2, 3])); // -> 4
