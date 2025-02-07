const infixToFunction = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y,
};

const infixEval = (str, regex) =>
  str.replace(regex, (_match, arg1, operator, arg2) =>
    infixToFunction[operator](parseFloat(arg1), parseFloat(arg2))
  );

const highPrecedence = (str) => {
  const regex = /([\d.]+)([*\/])([\d.]+)/;
  const str2 = infixEval(str, regex);
  return str === str2 ? str : highPrecedence(str2);
};

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

  even: (nums) => nums.filter(isEven),
  someeven: (nums) => nums.some(isEven),
  increment: (nums) => nums.map((num) => num + 1),

  firsttwo: (nums) => nums.slice(0, 2),
  lasttwo: (nums) => nums.slice(-2),
  has2: (nums) => nums.includes(2),
  random: ([x, y]) => Math.floor(Math.random() * y + x),
  range: (nums) => range(...nums),
  nodupes: (nums) => [...new Set(nums).values()],
  "": (nums) => nums,
};

const applyFunction = (str) => {
  const noHigh = highPrecedence(str);
  const infix = /([\d.]+)([+-])([\d.]+)/;
  const str2 = infixEval(noHigh, infix);
  const functionCall = /([a-z0-9]*)\(([0-9., ]*)\)(?!.*\()/i;
  const toNumberList = (args) => args.split(",").map(parseFloat);
  const apply = (fn, args) =>
    spreadsheetFunctions[fn.toLowerCase()](toNumberList(args));
  return str2.replace(functionCall, (match, fn, args) =>
    spreadsheetFunctions.hasOwnProperty(fn.toLowerCase())
      ? apply(fn, args)
      : match
  );
};

const range = (start, end) =>
  Array(end - start + 1)
    .fill(start)
    .map((element, index) => element + index);

const evalFormula = (x, cells) => {
  const idToText = (id) => cells.find((cell) => cell.id === id).value;
  const rangeRegex = /([A-J])([1-9][0-9]?):([A-J])([1-9][0-9]?)/gi;
  const rangeFromString = (num1, num2) => range(parseInt(num1), parseInt(num2));
  const elemValue = (num) => (character) => idToText(character + num);

  const addCharacters = (character1) => (character2) => (num) =>
    charRange(character1, character2).map(elemValue(num));

  const rangeExpanded = x.replace(
    rangeRegex,
    (_match, char1, num1, char2, num2) =>
      rangeFromString(num1, num2).map(addCharacters(char1)(char2))
  );

  const cellRegex = /[A-J][1-9][0-9]?/gi;
  const cellExpanded = rangeExpanded.replace(cellRegex, (match) =>
    idToText(match.toUpperCase())
  );

  const functionExpanded = applyFunction(cellExpanded);
  return functionExpanded === x
    ? functionExpanded
    : evalFormula(functionExpanded, cells);
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
    element.value = evalFormula(
      value.slice(1),
      Array.from(document.getElementById("container").children)
    );
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
