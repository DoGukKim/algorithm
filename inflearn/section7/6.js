// Title: 장난 꾸러기 현수
// Time: O(n log n)
// Space: O(n)
function main(n) {
  const result = [];
  const c = n.slice().sort((a, b) => a - b);

  for (let i = 0; i < c.length; i++) {
    if (c[i] !== n[i]) {
      result.push(i + 1);
    }
  }

  console.log(result);
}

main([120, 125, 152, 130, 135, 135, 143, 127, 160]);
main([120, 130, 150, 150, 130, 150]);
