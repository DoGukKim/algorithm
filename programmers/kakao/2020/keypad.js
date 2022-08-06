const main = (numbers, hand) => {
  const left = Object.freeze({
    1: "L",
    4: "L",
    7: "L",
  });

  const right = Object.freeze({
    3: "R",
    6: "R",
    9: "R",
  });

  const middle = Object.freeze({
    2: hand === "right" ? "R" : "L",
    5: hand === "right" ? "R" : "L",
    8: hand === "right" ? "R" : "L",
    0: hand === "right" ? "R" : "L",
  });

  let result = "";
  let leftPos = 0;
  let rightPos = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] in left) {
      leftPos = numbers[i];
      result += left[numbers[i]];
    }

    if (numbers[i] in right) {
      rightPos = numbers[i];
      result += right[numbers[i]];
    }

    if (numbers[i] in middle) {
      const left = Math.abs(leftPos - numbers[i]);
      const right = Math.abs(rightPos - numbers[i]);

      if (right < left) {
        result += "R";
        rightPos = numbers[i];
      }

      if (left < right) {
        result += "L";
        leftPos = numbers[i];
      }
    }
  }

  console.log(result);
};

main([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right");
