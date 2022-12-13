// Title: 문자열 압축
// Time: O(n)
// Space: O(n)
function main(s) {
  const stack = [];
  let acc = 1;

  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] !== s[i]) {
      if (acc > 1) {
        stack.push(acc);
        acc = 1;
      }
      stack.push(s[i]);
    } else acc++;
  }

  console.log(stack.join(""));
}

main("KKHSSSSSSSE");
