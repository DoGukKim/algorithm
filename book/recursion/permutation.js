// 방법 1
// Time: O(n! * n) -> * n인 이유는 매 재귀 마다 spread로 새로운 배열을 생성하기 때문
// Space: O(n^2)
const permute = (n) => {
  const result = [];

  function dfs(permutation) {
    // 조합된 순열을 새로운 배열로 result에 삽입해준다.
    if (permutation.length === n.length) {
      result.push([...permutation]);
      //   result.push([...permutation].join("")); // -> 문자열에 대한 순열 구할 때
      return;
    }

    for (let i = 0; i < n.length; i++) {
      if (permutation.includes(n[i])) continue; // 이미 순열에 해당하는 요소가 있으면 재귀를 작동하지 않게 한다.
      permutation.push(n[i]);
      dfs(permutation);
      // 백트랙킹으로 순열에 pop을 하는데, 그 이유는 예로 1,2,3 이후 재귀가 반환되면서
      // 순열이 1,2였을 때로 회귀했을 때 2를 제거하고 1,3으로 가기 위해서다.
      permutation.pop();
    }
  }
  dfs([]);

  return result;
};

console.log(permute([1, 2, 3])); // -> [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1];
console.log(permute("abc")); // -> [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]

// 방법 2
// Time: O(n! * n)
// Space: O(n^2)
const permute2 = (n) => {
  const result = [];

  function dfs(i) {
    if (i === n.length) {
      result.push(n.slice());
      //   result.push(n.slice().join("")); // 문자열로 수열을 구할 때.
      return;
    }

    // 이 방법은 i,j의 포인터를 사용한 in-place swap으로 해결했다.
    // i가 0일 때 j는 0,1,2로 n만큼 증가하면서 1,2,3 -> 2,1,3 -> 3,2,1 로 변환되어지고
    // 기저조건에 의해 i가 1로 회귀했을 때 j가 다시 반복문을 통해 증가하면서 swap이 일어나 나머지 1,3,2 -> 2,3,1 -> 3,2,1이 도출된다.
    for (let j = i; j < n.length; j++) {
      [n[i], n[j]] = [n[j], n[i]];
      dfs(i + 1);
      [n[j], n[i]] = [n[i], n[j]];
    }
  }
  dfs(0);

  return result;
};

console.log(permute2([1, 2, 3])); // -> [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 2, 1], [3, 1, 2];
console.log(permute2("abc".split(""))); // -> [ 'abc', 'acb', 'bac', 'bca', 'cba', 'cab' ]

// 방법 3
// Time: O(n!)
// Space: O(n^2)
const permute3 = (n) => {
  if (n.length === 0) return [[]];

  const withOutElement = permute3(n.slice(1)); // 재귀 마다 slice 되어 복사된 배열의 첫 요소를 제외한 나머지가 반환.
  const allPermutation = [];

  for (let i = 0; i < withOutElement.length; i++) {
    for (let j = 0; j <= withOutElement[i].length; j++) {
      const permWithElement = [
        ...withOutElement[i].slice(0, j),
        n[0],
        ...withOutElement[i].slice(j),
      ];
      allPermutation.push(permWithElement); // 모든 수열 삽입
    }
  }

  return allPermutation;
};

console.log(permute3([1, 2, 3]));
