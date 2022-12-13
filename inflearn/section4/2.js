// Title: 뒤집은 소수
// Time: O(n^2)
// Space: O(n)
function main(n) {
  const result = [];

  function isPrime(n) {
    if (n < 2) return false;

    for (let i = 2; i < Math.sqrt(Math.floor(n / 2)); i++) {
      if (n % i === 0) return false;
    }

    return true;
  }

  for (let i = 0; i < n.length; i++) {
    let reverse = "";

    while (n[i] > 0) {
      reverse += n[i] % 10;
      n[i] = Math.floor(n[i] / 10);
    }

    const temp = parseInt(reverse);
    const prime = isPrime(temp);
    if (prime) result.push(temp);
  }

  console.log(result);
}

main([32, 55, 62, 20, 250, 370, 200, 30, 100]);
