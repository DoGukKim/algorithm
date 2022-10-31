// Title: 다항식 더하기
// 방법 1
// Time: O(n*m)
// Space: O(1)
// Input: "3x + 7 + x", "4x + 7"
function solution(polynomial) {
  polynomial = polynomial.split(" + ");

  const m = {
    x: 0,
    n: 0,
  };

  for (let i = 0; i < polynomial.length; i++) {
    if (
      polynomial[i].length > 1 &&
      polynomial[i][polynomial[i].length - 1] === "x"
    ) {
      m["x"] = m["x"] + Number(polynomial[i].split("x")[0]);
    }

    if (polynomial[i] === "x") {
      m["x"] = m["x"] + 1;
    }

    if (!isNaN(polynomial[i])) {
      m["n"] = m["n"] + Number(polynomial[i]);
    }
  }

  if (m["x"] > 0 && m["n"] > 0) {
    return `${m["x"] > 1 ? m["x"] + "x" : "x"} + ${m["n"]}`;
  }

  if (m["x"] > 0) {
    return m["x"] > 1 ? m["x"] + "x" : "x";
  } else {
    return m["n"] + "";
  }
}
