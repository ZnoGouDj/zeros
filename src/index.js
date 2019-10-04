function factorial(n) {
  let f = 1n;
  for (let i = 1n; i <= n; i++) {
    f *= i;
  }
  return f;
}

function factorialDouble(n) {
  let f = n % 2n == 0 ? 2n : 1n;
  for (let i = f; i <= n; i += 2n) {
    f *= i;
  }
  return f;
}

function factCall(arr) {
  return arr.map(el => factorial(BigInt(el.slice(0, el.length - 1))));
}

function doubleFactCall(arr) {
  return arr.map(el => factorialDouble(BigInt(el.slice(0, el.length - 2))));
}

function countZeros(num) {
  let count = 0;
  while (num % 10n == 0) {
    count++;
    num /= 10n;
  }
  return count;
}

module.exports = function zeros(expression) {
  let exprArr = expression.split('*');
  let doubleFactArr = doubleFactCall(exprArr.filter(el => el.endsWith('!!')));
  let factArr = factCall(exprArr.filter(el => !el.endsWith('!!')));
  return product = countZeros(doubleFactArr.concat(factArr).reduce((a, b) => a * b));
}
