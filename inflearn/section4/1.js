// Title: 자릿수의 합
// m은 자릿수에 따라 발생하는 시간을 말합니다.
// Time: O(nm)
// Space: O(1)
function main(n, numbers) {
  let result = 0;
  let max = 0;

  for (let i = 0; i < n; i++) {
    const sum = sumOfDigits(numbers[i]);
    if (sum >= max) {
      if (result < numbers[i]) result = numbers[i];
      max = sum;
    }
  }

  console.log(result);

  function sumOfDigits(num) {
    let result = 0;

    while (num > 0) {
      result += num % 10;
      num = Math.floor(num / 10);
    }

    return result;
  }
}

main(7, [128, 460, 603, 40, 521, 137, 123]);
