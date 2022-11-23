const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let a = "A";
let b = "F";
let sortArray = [];
let itter = 0;

const REG_FUNC = (arg1, arg2) => {
  const REG_EX = new RegExp(`[${arg1}-${arg2}]`);
  for (let i = 0; i < ALPHABET.length; i++) {
    if (ALPHABET[i].match(REG_EX)) {
      sortArray.push(ALPHABET[i]);
    }
  }
};
REG_FUNC(a, b);
const intervalId = setInterval(function () {
  if (itter < sortArray.length) {
    console.log(sortArray[itter]);
    itter++;
  }
}, 1000);