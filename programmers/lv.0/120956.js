// Title: 옹알이
// 방법 1
// Time: O()
// Space: O()
// InputA: ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"] -> 2
// InputB: ["yemawooye"] -> 1
function solution(babbling) {
  const ws = ["aya", "ye", "woo", "ma"];

  const dfs = (w, idx, r = "") => {
    for (let i = 0; i < ws.length; i++) {
      if (w.includes(ws[i])) {
        if (r === ws[i]) return null;
        r = ws[i];
        w = w.replace(ws[i], "");
        babbling[idx] = w;
        dfs(w, idx, r);
      }
    }
  };

  for (let i = 0; i < babbling.length; i++) {
    dfs(babbling[i], i);
  }

  return babbling.filter((w) => w === "").length;
}
