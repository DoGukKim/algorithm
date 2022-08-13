const main = (fees, records) => {
  const sortedRecords = records
    .map((record) => record.split(" "))
    .sort((a, b) => a[1] - b[1]);

  const map = new Map();
  for (let i = 0; i < sortedRecords.length; i += 1) {
    let [time, carNumber, status] = sortedRecords[i];
    const [h, m] = time.split(":");
    time = Number(h) * 60 + Number(m);

    if (!map.has(carNumber)) {
      map.set(carNumber, { time, status });
      continue;
    }

    map.set(carNumber, { time: time - map.get(carNumber).time, status });
  }

  for (const [carNumber, record] of map)
    if (record.status === "IN")
      map.set(carNumber, { time: 1439 - record.time, status: "OUT" });

  let result = [];
  for (const [_, record] of map) {
    if (record.time <= fees[0]) result.push(fees[1]);
    else
      result.push(
        fees[1] + Math.ceil((record.time - fees[0]) / fees[2]) * fees[3]
      );
  }
  return result;
};

const fees = [180, 5000, 10, 600];
const records = [
  "05:34 5961 IN",
  "06:00 0000 IN",
  "06:34 0000 OUT",
  "07:59 5961 OUT",
  "07:59 0148 IN",
  "18:59 0000 IN",
  "19:09 0148 OUT",
  "22:59 5961 IN",
  "23:00 5961 OUT",
];

console.log(main(fees, records));
