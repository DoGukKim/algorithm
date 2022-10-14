// Title: 장난 꾸러기 현수
// 방법 1
// Time: O(n)
// Space: O(n)
// Input: 120 125 152 130 135 135 143 127 160
function main(n) {
  const result = [];
  const c = n.slice().sort((a, b) => a - b);

  for (let i = 0; i < c.length; i++) {
    if (c[i] !== n[i]) {
      result.push(i + 1);
    }
  }

  return result;
}

console.log(main([120, 125, 152, 130, 135, 135, 143, 127, 160])); // -> [3, 8]
console.log(main([120, 130, 150, 150, 130, 150])); // -> [3, 5]
