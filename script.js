const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let a = "A";
let b = "F";
let sortArray = [];
let count = 0;

const REG_FUNC = (arg1, arg2) => {
  for (let i = 0; i < ALPHABET.length; i++) {
    if (ALPHABET[i].charCodeAt() >= arg1.charCodeAt() && ALPHABET[i].charCodeAt() <= arg2.charCodeAt()) {
      sortArray.push(ALPHABET[i]);
    }
  }
};
REG_FUNC(a, b);
const intervalId = setInterval(function () {
  if (count < sortArray.length) {
    console.log(sortArray[count]);
    count++;
  }
}, 1000);