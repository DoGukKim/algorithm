const main = (id_list, report, k) => {
  const map = new Map();

  for (let i = 0; i < id_list.length; i += 1) {
    map.set(id_list[i], []);
  }

  for (let i = 0; i < report.length; i += 1) {
    const element = report[i].split(" ");
    const isHas = map.get(element[0]).find((user) => user === element[1]);
    if (!isHas) map.set(element[0], [...map.get(element[0]), element[1]]);
  }

  const map2 = new Map();
  for (let i = 0; i < id_list.length; i += 1) {
    map2.set(id_list[i], 0);
  }

  for (const [_, users] of map) {
    for (const user of users) {
      map2.set(user, map2.get(user) + 1);
    }
  }

  const bannedUsers = [];
  for (const [key, value] of map2) {
    if (value >= k) bannedUsers.push(key);
  }

  const result = [];
  for (const [_, users] of map) {
    let count = 0;
    for (let i = 0; i < users.length; i++) {
      for (let j = 0; j < bannedUsers.length; j++) {
        if (users[i] === bannedUsers[j]) count += 1;
      }
    }
    result.push(count);
  }

  return result;
};

// const id_list = ["muzi", "frodo", "apeach", "neo"];
const id_list = ["con", "ryan"];
// const report = [
//   "muzi frodo",
//   "apeach frodo",
//   "frodo neo",
//   "muzi neo",
//   "apeach muzi",
// ];
const report = ["ryan con", "ryan con", "ryan con", "ryan con"];
console.log(main(id_list, report, 2));
