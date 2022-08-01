function solution(X, Y) {
  X = new Set(X);
  Y = Y.split("").sort((a, b) => b - a);

  const map = new Map();
  for (let value of X) {
    map.set(value, true);
  }

  let result = "";
  for (let i = 0; i < Y.length; i++) {
    if (map.has(Y[i])) {
      if (result[result.length - 1] !== "0") result += Y[i];
    }
  }

  return result || "-1";
}
