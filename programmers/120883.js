// Title: 로그인 성공?
// 방법 1
// Time: O(n)
// Space: O(1)
// Input: ["meosseugi", "1234"], [["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]]
function solution(id_pw, db) {
  for (let i = 0; i < db.length; i++) {
    const [id, pw] = db[i];
    if (id === id_pw[0] && pw === id_pw[1]) return "login";
    if (id === id_pw[0] && pw !== id_pw[1]) return "wrong pw";
  }

  return "fail";
} // -> "login"
