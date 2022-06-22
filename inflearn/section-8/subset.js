const solution = (n) => {
  function recursion(m, result = []) {
    if (m > n) return;
    const arr1 = result.slice();
    const arr2 = result.slice();
    arr1.push(m);
    recursion(m + 1, arr1);
    console.log(arr1);
    recursion(m + 1, arr2);
  }
  recursion(1);
};
solution(3);
