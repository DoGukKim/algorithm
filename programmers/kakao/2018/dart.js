const main = (dartResult) => {
  const result = [];

  const bonus = Object.freeze({
    S: 1,
    D: 2,
    T: 3,
  });

  const options = Object.freeze({
    "*": 2,
    "#": -1,
  });

  for (let i = 0; i < dartResult.length; i++) {
    // S,D,T와 *,#이 아닐때
    if (!(dartResult[i] in bonus) && !(dartResult[i] in options)) {
      if (dartResult[i + 1] === "0") {
        // 10처리
        result.push(Number(dartResult[i]) * 10);
      } else {
        if (dartResult[i] !== "0") {
          // 0이 아닐 땐 그냥 넣어주고
          result.push(Number(dartResult[i]));
        } else if (dartResult[i] === "0" && dartResult[i - 1] in bonus) {
          // 0일 땐 앞에 요소가 보너스에 요소일 때만 0삽입
          result.push(0);
        }
      }
    }

    if (dartResult[i] in bonus) {
      result.push(Math.pow(result.pop(), bonus[dartResult[i]]));
    }

    if (dartResult[i] in options) {
      if (dartResult[i] === "*" && result.length > 1) {
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

// console.log(main("1D2S#10S"));
// console.log(main("10D4S10D"));
// console.log(main("1D2S0T"));
// console.log(main("10S1S0S")); // 12
console.log(main("0S0S0S"));
