const solution = (s) => {
  const stack = [];
  const operator = Object.freeze({
    "*": true,
    "/": true,
    "+": true,
    "-": true,
  });

  for (let i = 0; i < s.length; i++) {
    if (!operator[s[i]]) {
      stack.push(Number(s[i]));
    } else {
      const sum = new Function("a", "b", `return b ${s[i]} a`);
      const result = sum(stack.pop(), stack.pop());
      stack.push(result);
    }
  }

  return stack[0];
};

function otherSolution(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === "+") stack.push(lt + rt);
      else if (x === "-") stack.push(lt - rt);
      else if (x === "*") stack.push(lt * rt);
      else if (x === "/") stack.push(lt / rt);
    }
  }
  answer = stack[0];
  return answer;
}
