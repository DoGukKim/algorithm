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
    if (users.length === 0) result.push(0);
    else {
      for (const user of users) {
        for (const banUser of bannedUsers) {
          console.log(user);
        }
      }
    }
  }

  return result;
};

const id_list = ["muzi", "frodo", "apeach", "neo"];
// const id_list = ["con", "ryan"];
const report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
// const report = ["ryan con", "ryan con", "ryan con", "ryan con"];
console.log(main(id_list, report, 2));

// const map = new Map();

// for (let i = 0; i < id_list.length; i += 1) {
//   map.set(id_list[i], 0);
// }

// const map2 = new Map();
// for (let i = 0; i < report.length; i += 1) {
//   const element = report[i].split(" ");
//   map.set(element[1], map.get(element[1]) + 1);

//   if (!map2.has(element[0])) map2.set(element[0], new Set());
//   map2.set(element[0], map2.get(element[0]).add(element[1]));
// }

// const bannedUsers = new Set();
// for (const [key, value] of map) {
//   if (value >= k) bannedUsers.add(key);
// }

// const map3 = new Map();
// for (const [key, value] of map2) {
//   for (const user of bannedUsers) {
//     if (value.has(user)) {
//       map3.set(key, (map3.get(key) || 0) + 1);
//     }
//   }
// }

// const map4 = new Map();
// for (let i = 0; i < id_list.length; i++) {
//   map4.set(id_list[i], 0);
// }

// for (const [key, value] of map3) {
//   map4.set(key, value);
// }

// const result = [];
// for (const [_, value] of map4) {
//   result.push(value);
// }

// return result;
