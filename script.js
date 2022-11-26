function regFunc(arg1, arg2) {
  let a;
  let b;
  if (arg1.charCodeAt() < arg2.charCodeAt()) {
    a = arg1.charCodeAt();
    b = arg2.charCodeAt();
  } else {
    a = arg2.charCodeAt();
    b = arg1.charCodeAt();
  }
  setInterval(() => {
    if (a <= b) {
      console.log(String.fromCharCode(a));
      a++;
    }
  }, 1000);
}
regFunc("A", "F");
