// 방법 1
// Time: O(n^m)
// Space: O(n^2)
const main = (n, m) => {
  const result = [];

  function permute(permutation) {
    if (permutation.length === m) {
      result.push([...permutation]);
      return;
    }

    for (let i = 0; i < n.length; i++) {
      permutation.push(n[i]);
      permute(permutation);
      permutation.pop();
    }
  }
  permute([]);

  return [result, result.length];
};

console.log(main([1, 2, 3], 2));
// [
//     [ 1, 1 ], [ 1, 2 ],
//     [ 1, 3 ], [ 2, 1 ],
//     [ 2, 2 ], [ 2, 3 ],
//     [ 3, 1 ], [ 3, 2 ],
//     [ 3, 3 ]
//  ],
//  9
