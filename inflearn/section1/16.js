// Title: 중복문자제거
// 방법 1
// Time: O(n)
// Space: O(n)
function main(str) {
  const map = new Map();
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (!map.has(str[i])) {
      result += str[i];
      map.set(str[i]);
    }
  }

  console.log(result);
}

// 방법 2
// Time: O(n)
// Space: O(n)
function main(str) {
  console.log([...new Set(str)].join(""));
}

// 방법 3
// Time: O(n^2)
// Space: O(n)
function main(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === i) result += str[i];
  }

  console.log(result);
}

main("ksekkset");
