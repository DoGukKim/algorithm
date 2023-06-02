let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const money = Number(input.shift());
input = input[0].split(" ").map(Number);

class Human {
  constructor(money) {
    this.ownMoney = money;
    this.stockCount = 0;
  }

  calcProfit() {
    this.ownMoney += input.at(-1) * this.stockCount;
  }
}

class JH extends Human {
  bnp() {
    for (let i = 0; i < input.length; i++) {
      if (this.ownMoney < input[i]) continue;
      const stockCount = Math.floor(this.ownMoney / input[i]);
      this.ownMoney -= stockCount * input[i];
      this.stockCount += stockCount;
    }

    this.calcProfit();
  }
}

class SM extends Human {
  timing() {
    for (let i = 2; i < input.length; i++) {
      let j = i - 2;
      const stack = [];
      while (j <= i) {
        if (!stack.length) {
          stack.push(input[j]);
          j++;
          continue;
        }

        if (stack.at(-1) < input[j]) stack.push(input[j]);

        j++;
      }

      if (stack.length === 3) {
        this.ownMoney += input[i] * this.stockCount;
        this.stockCount = 0;
        continue;
      }

      let t = i - 2;
      const stack2 = [];
      while (t <= i) {
        if (!stack2.length) {
          stack2.push(input[t]);
          t++;
          continue;
        }

        if (stack2.at(-1) > input[t]) stack2.push(input[t]);
        t++;
      }

      if (stack2.length === 3 && this.ownMoney >= input[i]) {
        const count = Math.floor(this.ownMoney / input[j]);
        this.ownMoney -= count * input[i];
        this.stockCount += count;
      }
    }

    this.calcProfit();
  }
}

const jh = new JH(money);
const sm = new SM(money);

jh.bnp();
sm.timing();

console.log(jh, sm);
