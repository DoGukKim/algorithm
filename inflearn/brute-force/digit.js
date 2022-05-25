const solution = (array) => {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    let temp = array[i];

    while (temp) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);
    }

    if (sum > max) {
      max = sum;
      answer = array[i];
    } else if (sum === max) {
      if (answer < array[i]) answer = array[i];
    }
  }
  return answer;
};
