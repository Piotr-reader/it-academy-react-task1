let a = "A";
let b = "F";
let arr = [];
let count = 0;

const REG_FUNC = (arg1, arg2) => {
  let i = arg1.charCodeAt();
  let c = arg2.charCodeAt();
  if (i < c) {
    for (; i <= c; i++) {
      arr.push(i);
    }
  } else {
    for (; i >= c; i++) {
      arr.push(i);
    }
  }
};
REG_FUNC(a, b);
const intervalId = setInterval(function () {
  if (count < arr.length) {
    console.log(String.fromCharCode(arr[count]));
    count++;
  }
}, 1000);
