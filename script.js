function regFunc(a, b) {
  let arr = [];
  arr.push(a.charCodeAt());
  arr.push(b.charCodeAt());
  arr = arr.sort((a, b) => a - b);
  setInterval(() => {
    if (arr[0] <= arr[1]) {
      console.log(String.fromCharCode(arr[0]));
      arr[0]++;
    }
  }, 1000);
}
regFunc("A", "F");
