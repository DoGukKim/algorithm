function solution(num, total) {
  let sum = 0;
  let lp = 0;
  let rp = lp + 1;

  while (sum !== total) {
    sum = lp;
    let t = num;
    while (--t) {
      sum += rp++;
    }
    if (sum === total) return lp;
    sum = 0;
    lp++;
    rp = lp + 1;
  }

  console.log(lp);
}

console.log(solution(3, 12));
console.log(solution(5, 5));
