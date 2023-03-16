// Title: 뒤집은 소수
// Time: O(nm)
// Space: O(nm)
function main(n, numbers) {
  const result = [];
  for (let i = 0; i < n; i++) {
    let reverse = "";

    while (numbers[i] > 0) {
      reverse += numbers[i] % 10;
      numbers[i] = Math.floor(numbers[i] / 10);
    }

    const temp = parseInt(reverse);
    const prime = isPrime(temp);
    if (prime) result.push(temp);
  }

  console.log(result.join(" "));

  function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i < Math.sqrt(Math.floor(num / 2)); i++) {
      if (num % i === 0) return false;
    }

    return true;
  }
}

main(9, [32, 55, 62, 20, 250, 370, 200, 30, 100]);
