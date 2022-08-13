const main = (s) => {
  let result = s.length; // s의 길이 값으로 초기화

  function dfs(i) {
    if (i > s.length) return; // 기저 조건

    let compressResult = ""; // 단위 별 결과물
    let compressWord = s.substr(0, i); // 처음부터 단위까지의 압축단어 초기화
    let acc = 0; // 누적 값

    for (let j = 0; j < s.length; j = j + i) {
      const current = s.substr(j, i); // 단위별 현재 단어

      if (current !== compressWord) {
        // 현재 단어가 압축단어와 다르면
        if (acc > 1) {
          compressResult += String(acc) + compressWord; // acc + 압축단어
        } else {
          compressResult += compressWord; // 압축단어
        }

        compressWord = s.substr(j, i); // 압축단어 갱신
        acc = 1; // 누적 값 1 초기화 1인 이유는 압축단어 자체도 카운터 하나 해줘야 하기 때문
        continue;
      }

      acc++; // 같으면 누적 + 1
    }

    // 반목분 다 돌았을 때 나머지 처리
    if (acc > 1) compressResult += String(acc) + compressWord;
    else compressResult += compressWord.repeat(acc);

    if (compressResult.length < result) result = compressResult.length; // 최소 길이 재할당

    dfs(i + 1); // 재귀
  }
  dfs(1);

  return result;
};

main("aabbaccc");
main("ababcdcdababcdcd");
main("abcabcdede");
main("abcabcabcabcdededededede");
main("xababcdcdababcdcd");
