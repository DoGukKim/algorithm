const main = (dartResult) => {
  const bonus = Object.freeze({
    S: 1,
    D: 2,
    T: 3,
  });

  const options = Object.freeze({
    "*": 2,
    "#": -1,
  });

  let result = [];

  for (let i = 0; i < dartResult.length; i++) {
    if (!isNaN(dartResult[i])) {
      if (dartResult[i + 1] === "0") {
        result.push(dartResult[i] * 10);
        continue;
      }

      if (result[result.length - 1] !== 10 && dartResult[i] === "0") {
        result.push(0);
        continue;
      }

      if (dartResult[i] !== "0") result.push(Number(dartResult[i]));
    }

    if (dartResult[i] in bonus) {
      result.push(Math.pow(result.pop(), bonus[dartResult[i]]));
    }

    if (dartResult[i] in options) {
      if (result.length > 1 && dartResult[i] === "*") {
        const calc =
          result.pop() * options[dartResult[i]] +
          result.pop() * options[dartResult[i]];
        result.push(calc);
      } else {
        result.push(result.pop() * options[dartResult[i]]);
      }
    }
  }

  return result.reduce((acc, cur) => acc + cur, 0);
};

console.log(main("1D2S#10S"));
console.log(main("10D4S10D"));
console.log(main("1D2S0T"));
console.log(main("0S0S0S"));
console.log(main("1S*2T*3S"));
console.log(main("1D2S3T*"));
console.log(main("1S2D3T*"));
