// Title: 배열의 길이를 2의 거듭제곱으로 만들기
// Time: O(n)
// Space: O(n)
function solution(arr) {
  const len = arr.length;
  if (len <= 2) return arr;
  if (len > 2 && len <= 4) return concatArr(4);
  if (len > 4 && len <= 8) return concatArr(8);
  if (len > 8 && len <= 16) return concatArr(16);
  if (len > 16 && len <= 32) return concatArr(32);
  if (len > 32 && len <= 64) return concatArr(64);
  if (len > 64 && len <= 128) return concatArr(128);
  if (len > 128 && len <= 256) return concatArr(256);
  if (len > 256 && len <= 512) return concatArr(512);
  if (len > 512) return concatArr(1024);

  function concatArr(n) {
    return [...arr, ...Array.from({ length: n - len }, () => 0)];
  }
}
