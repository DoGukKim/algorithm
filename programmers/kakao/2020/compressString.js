const main = (s) => {
  let result = s.length; // 기존 s의 길이 값으로 초기화

  function dfs(i) {
    if (i > s.length) return; // 기저 조건

    let compressResult = ""; // i 압축 결과
    let compressWord = s.substr(0, i); // 압축어 초기화 처음부터 i 까지
    let acc = 0; // 누적 값

    for (let j = 0; j <= s.length + i; j += i) {
      const currentWord = s.substr(j, i); // 현재 i 단위로 잘린 언어

      if (currentWord !== compressWord) {
        if (acc > 1) {
          compressResult += String(acc) + compressWord; // 압축 누적 값 + 압축 단어
        } else {
          compressResult += compressWord; // 누적 추가 없이 추가
        }

        compressWord = s.substr(j, i); // 단위 별 압축어 재할당
        acc = 1; // 누적 값 초기화

        continue;
      }

      if (currentWord === compressWord) {
        // 압축 값과 현재 단어가 같을 때는 누적 값 1 증가
        acc++;
      }
    }

    if (compressResult.length < result) {
      // 압축 결과가 이전 최소 값 보다 작으면 재할당
      result = compressResult.length;
    }

    dfs(i + 1);
  }
  dfs(1);

  return result;
};

main("aabbaccc");
main("ababcdcdababcdcd");
main("abcabcdede");
main("abcabcabcabcdededededede");
main("xababcdcdababcdcd");
