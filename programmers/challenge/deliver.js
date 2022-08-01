const main = (order) => {
  let lp = 0;
  let rp = 1;

  const stack = [];
  const result = [];

  while (rp < order.length) {
    if (order[lp] !== rp) {
      stack.push(rp);
      rp++;
    }

    if (order[lp] === rp) {
      result.push(rp);
      lp++;
    }

    if (stack.length > 0) {
      while (stack[stack.length - 1] === order[lp]) {
        if (!stack.length) break;
        result.push(stack.pop());
        lp++;
      }
    }
  }

  return result.length;
};

console.log(main([4, 3, 1, 2, 5]));
