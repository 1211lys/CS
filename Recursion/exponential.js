function exponential(x, n) {
  if (n == 0) return 1;
  return exponential(x, n - 1) * x;
}

console.log(exponential(2, 5));
//32 = 2의 5승
