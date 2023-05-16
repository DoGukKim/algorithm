// Title: 그림 확대
// Time: O(nmk)
// Space: O(nmk)
function solution(picture, k) {
  const result = [];
  const r = picture.length;
  const c = picture[0].length;

  for (let x = 0; x < r; x++) {
    let sum = "";
    for (let y = 0; y < c; y++) {
      sum += picture[x][y].repeat(k);
    }

    for (let i = 0; i < k; i++) result.push(sum);
  }

  return result;
}
