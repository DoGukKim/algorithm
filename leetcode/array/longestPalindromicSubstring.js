const main = (s) => {
  const result = [];
  const mid = Math.floor((s.length - 1) / 2);
  let lp = mid - 1;
  let rp = mid + 1;

  //   console.log(s.slice(lp, rp + 1));

  if (s.length % 2 === 0) {
    // even
  } else {
    // odd
    calcPalindromic(s, lp, rp, result);
  }

  return result;
};

const calcPalindromic = (s, lp, rp, result) => {
  while (lp >= 0 && rp <= s.length - 1) {
    if (s[lp] === s[rp]) {
      result.push(s.slice(lp, rp + 1));
    }
    lp--;
    rp++;
  }
};

console.log(main("babad"));
