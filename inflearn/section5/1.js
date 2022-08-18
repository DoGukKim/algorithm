// 방법 1
// Time: O(min(n,m))
// Space: O(n+m)
const main = (arr1, arr2) => {
  let result = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) result.push(arr1.shift());
    else result.push(arr2.shift());
  }

  result = [...result, ...arr1, ...arr2];
  return result;
};

console.log(main([1, 3, 5], [2, 3, 6, 7, 9]));

// 방법 2
// Time: O(min(n,m))
// Space: O(n+m)
const main2 = (arr1, arr2) => {
  let result = [];
  let lp = 0;
  let rp = 0;

  while (lp < arr1.length && rp < arr2.length) {
    if (arr1[lp] <= arr2[rp]) result.push(arr1[lp++]);
    else result.push(arr2[rp++]);
  }

  while (lp < arr1.length) result.push(arr1[lp++]);
  while (rp < arr2.length) result.push(arr2[rp++]);

  return result;
};

console.log(main2([1, 3, 5], [2, 3, 6, 7, 9]));

// 방법 3
// Time: O(min(n,m)^2)
// Space: O(n+m)
const main3 = (arr1, arr2) => {
  let result = [];

  function dfs(a1, a2) {
    // 배열들을 하나씩 줄여가면서 삽입해주고, 기저 조건에서 나머지를 처리해주면 된다
    if (a1.length < 1 || a2.length < 1) {
      result = [...result, ...a1, ...a2];
      return;
    }

    if (a1[0] > a2[0]) {
      result.push(a2[0], a1[0]);
    } else {
      result.push(a1[0], a2[0]);
    }

    dfs(a1.slice(1), a2.slice(1));
  }
  dfs(arr1, arr2);

  return result; // -> 1,2,3,3,5,6,7,9
};

console.log(main3([1, 3, 5], [2, 3, 6, 7, 9]));
