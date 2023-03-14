// Title: 문자열 압축
// Time: O(n)
// Space: O(n)
function main(str) {
  const stack = [str[0]];
  let acc = 1;

  for (let i = 1; i < str.length; i++) {
    if (stack[stack.length - 1] === str[i]) {
      acc++;
      continue;
    }

    if (stack[stack.length - 1] !== str[i]) {
      if (acc > 1) stack.push(acc);
      acc = 1;
      stack.push(str[i]);
    }
  }

  console.log(stack.join(""));
}

main("KKHSSSSSSSE");
