// Time: O(n^2) -> 시간초과로 오답
// Time: O(n)
const main = (record) => {
  let messages = [];

  for (let i = 0; i < record.length; i++) {
    record[i] = record[i].split(" ");
    const [status, id, name] = record[i];

    if (status === "Enter") {
      messages.push({ id, name, status });
      messages = modifyNameByMessage(id, name);
    }

    if (status === "Leave") {
      const index = messages.findIndex((message) => message.id === id);
      messages.push({ ...messages[index], status });
    }

    if (status === "Change") {
      messages = modifyNameByMessage(id, name);
    }
  }

  function modifyNameByMessage(id, name) {
    return messages.map((message) => {
      if (message.id === id) {
        return {
          ...message,
          name,
        };
      } else return message;
    });
  }

  // 메세지 결과 변환
  const result = [];
  for (let i = 0; i < messages.length; i++) {
    result.push(handleMessage(messages[i].name, messages[i].status));
  }

  function handleMessage(name, status) {
    const messageBy = {
      Enter: "들어왔습니다.",
      Leave: "나갔습니다.",
    };
    return `${name}님이 ${messageBy[status]}`;
  }

  return result;
};

console.log(
  main([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);

// 참고한 풀이
// Time: O(n)
// Space: O(n)
const main2 = (record) => {
  let answer = [];
  const users = {};
  record.map((history) => {
    const [action, id, name] = history.split(" ");
    if (action !== "Leave") users[id] = name;
  });

  record.map((history) => {
    const [action, id] = history.split(" ");
    if (action === "Enter") answer.push(`${users[id]}님이 들어왔습니다.`);
    if (action === "Leave") answer.push(`${users[id]}님이 나갔습니다.`);
  });

  return answer;
};
