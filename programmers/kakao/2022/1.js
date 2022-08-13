// 신고 결과 받기
// Time: O(n^3)
// Space: O()
const main = (id_list, report, k) => {
  const reportMap = new Map();

  for (let i = 0; i < id_list.length; i += 1)
    reportMap.set(id_list[i], new Set());

  for (let i = 0; i < report.length; i += 1) {
    const element = report[i].split(" ");
    reportMap.set(element[0], reportMap.get(element[0]).add(element[1]));
  }

  const countMap = new Map();
  for (const [_, reportedUsers] of reportMap) {
    for (const user of reportedUsers) {
      countMap.set(user, (countMap.get(user) || 0) + 1);
    }
  }

  const bannedUsers = [];
  for (const [user, count] of countMap) {
    if (count >= k) bannedUsers.push(user);
  }

  const result = [];
  for (const [_, reportedUsers] of reportMap) {
    let count = 0;
    for (let i = 0; i < reportedUsers.size; i += 1) {
      count = 0;
      for (let j = 0; j < bannedUsers.length; j += 1) {
        if (reportedUsers.has(bannedUsers[j])) count += 1;
      }
    }
    result.push(count);
  }

  return result;
};

const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = ["ryan con", "ryan con", "ryan con", "ryan con"];
const k = 2;

// const id_list = ["con", "ryan"];
// const report = [
//   "muzi frodo",
//   "apeach frodo",
//   "frodo neo",
//   "muzi neo",
//   "apeach muzi",
// ];
// const k = 3;

console.log(main(id_list, report, k));
