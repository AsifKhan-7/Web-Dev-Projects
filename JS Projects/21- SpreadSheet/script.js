const isEven = (num) => (num % 2 === 0 ? true : false);

const sum = (nums) => nums.reduce((acc, currVal) => acc + currVal, 0);

const average = (nums) =>
  nums.reduce((acc, currVal) => acc + currVal, 0) / nums.length;

const median = (nums) => {
  const sorted = nums.slice().sort((a, b) => a - b);
  const length = sorted.length;
  const middle = length / 2 - 1;

  // return isEven(length)
  //   ? average([sorted[middle], sorted[middle + 1]])
  //   : sorted[Math.ceil(middle)];

  if (isEven(length)) {
    return sorted[middle] + sorted[middle + 1] / 2;
  } else {
    return sorted[Math.ceil(middle)];
  }
};

const spreadsheetFunctions = {
  sum,
  average,
  median,
};

const range = (start, end) =>
  Array(end - start + 1)
    .fill(start)
    .map((element, index) => element + index);

const evalFormula = (x, cells) => {
  const idToText = (id) => cells.find((cell) => cell.id === id).value;
  const rangeRegex = /([A-J])([1-9][0-9]?):([A-J])([1-9][0-9]?)/gi;
  const rangeFromString = (num1, num2) => range(parseInt(num1), parseInt(num2));
  const elemValue = (num) => {
    const inner = (character) => {
      return idToText(character + num);
    };
    return inner;
  };

  const addCharacters = (character1) => {};
};

const charRange = (start, end) =>
  range(start.charCodeAt(0), end.charCodeAt(0)).map((code) =>
    String.fromCharCode(code)
  );

window.onload = () => {
  const container = document.getElementById("container");

  const createLabel = (name) => {
    const label = document.createElement("div");
    label.className = "label";
    label.textContent = name;
    container.appendChild(label);
  };

  const letters = charRange("A", "J");
  letters.forEach(createLabel);

  range(1, 99).forEach((number) => {
    createLabel(number);
    letters.forEach((letter) => {
      const input = document.createElement("input");
      input.type = "text";
      input.id = letter + number;
      input.ariaLabel = letter + number;

      input.onchange = update;
      container.appendChild(input);
    });
  });
};

const update = (event) => {
  const element = event.target;
  const value = element.value.replace(/\s/g, "");

  if (!value.includes(element.id) && value[0] === "=") {
    // if (!value.includes(element.id) && value.startsWith("=")) {
    // }
  }
};

/* Currying example */

// function curryingExample() {
//   // function orderFood(cuisine) {
//   //   return function (dish) {
//   //     return function (quantity) {
//   //       return `You have ordered ${quantity} ${dish} from ${cuisine} cuisine.`;
//   //     };
//   //   };
//   // }
//   // const indianOrder = orderFood("Indian");
//   // const biryaniOrder = indianOrder("Biryani");
//   // console.log(biryaniOrder(2));
//   // console.log(orderFood("Indian")("Biryani")(3));
//   /* ================================================= */
//   /* Arrow syntax */
//   // const orderFood = (cuisine) => (dish) => (quantity) =>
//   //   `You have ordered ${quantity} ${dish} from ${cuisine} cuisine.`;
//   // const indianOrder = orderFood("Indian");
//   // const biryaniOrder = indianOrder("Biryani");
//   // console.log(biryaniOrder(2));
//   // console.log(orderFood("Indian")("Biryani")(3));
// }

/* Closure example */

// function closureExample() {
//   // function outerFunction() {
//   //   let counter = 0; // outer variable
//   //   return function innerFunction() {
//   //     counter++; // `counter` variable ko access aur modify kar raha hai inner function
//   //     return counter;
//   //   };
//   // }
//   // const counterFunc = outerFunction(); // outerFunction execute hua
//   // console.log(counterFunc()); // 1
//   // console.log(counterFunc()); // 2
//   // console.log(counterFunc()); // 3
//   /* ====================================================== */
//   /* Bank Account example to understand closure */
//   // function createAccount(initialBalance) {
//   //   let balance = initialBalance; // `balance` is a local variable for the account
//   //   return {
//   //     deposit: (amount) => {
//   //       balance += amount; // deposit increases balance
//   //       console.log(`Deposited: ${amount}. Current balance: ${balance}`);
//   //     },
//   //     withdraw: (amount) => {
//   //       if (balance >= amount) {
//   //         balance -= amount; // withdraw decreases balance
//   //         console.log(`Withdrawn: ${amount}. Current balance: ${balance}`);
//   //       } else {
//   //         console.log("Insufficient funds!");
//   //       }
//   //     },
//   //     getBalance: () => {
//   //       console.log(`Current balance: ${balance}`);
//   //     },
//   //   };
//   // }
//   // const myAccount = createAccount(1000); // Create an account with an initial balance of 1000
//   // myAccount.deposit(500); // Depositing 500
//   // myAccount.withdraw(200); // Withdrawing 200
//   // myAccount.getBalance(); // Checking balance
// }
