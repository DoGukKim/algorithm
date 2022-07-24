const main = () => {
  let result = "";
  const queue = [1];

  while (queue.length > 0) {
    const current = queue.shift();
    result += String(current);
    for (const item of [current * 2, current * 2 + 1]) {
      if (item > 7) break;
      queue.push(item);
    }
  }

  console.log(result);
};
main();
