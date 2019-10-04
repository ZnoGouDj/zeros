function factorial(n) {
  let f = n;
  for (let i = 1n; i < n; i++) {
    f *= n - i;
  }
  return f;
}

function factorialDouble(n) {
  let f = n;
  for (let i = 2n; i < n; i += 2n) {
    f *= n - i;
  }
  return f;
}

module.exports = function zeros(expression) {
  let exprArr = expression.split('*'); //[ '5!' ]
  let doubleFactArr = exprArr.filter(elem => elem.endsWith('!!')); //[ '9!!', '10!!', '7!!' ]
  let factArr = exprArr.filter(elem => !elem.endsWith('!!')); //[ '5!' ]
  let double = doubleFactArr.map(elem => elem.slice(0, elem.length - 2)); //[ '9', '10', '7' ]
  let simple = factArr.map(elem => elem.slice(0, elem.length - 1)); //[ '5' ]
  let bigDouble = double.map(el => BigInt(el));
  let bigSimple = simple.map(el => BigInt(el));
  let doubleProd = bigDouble.map(el => factorialDouble(el)); //[ 945n, 3840n, 105n ]
  let simpleProd = bigSimple.map(el => factorial(el)); //[ 120n ]
  let product = doubleProd.concat(simpleProd).reduce((a, b) => a * b); //381024000n
  let count = 0;
  while (product % 10n == 0) {
    count++;
    product /= 10n;
  }
  return count;
}



/*
to divide string -> split('*');
reduce -> if str endsWith('!') -> to count fact
       if str endsWith('!!') -> to count another fact
if expr.length > 3 -> arrFromReduce.reduce(a, b) => a * b;
return newReduce || arrFromReduce; 
*/


  //// let factorialArr = [];
  //// exprArr.forEach(el => {
  ////   if (el.endsWith('!!')) {
  ////     let newEl = el.slice(0, el.length - 2);
  ////     factorialArr.push(factorialDouble(newEl));
  ////   }
  ////   let newEl = el.slice(0, el.length - 1);
  ////   factorialArr.push(factorial(newEl));
  //// });
  //// let finalArr = factorialArr.reduce((a, b) => a * b);
  //// let count = 0;
  //// for (let i = finalArr.length - 1; i > 0; i--) {
  ////   return finalArr !== 0 ? count : count++;
  //// }

  /*
  let doubleFactArr = exprArr.filter(el => el.endsWith('!!')).slice(0, el.length - 2).map(el => factorialDouble(el));
  let factArr = exprArr.filter(el => !el.endsWith('!!')).slice(0, el.length - 1).map(el => factorial(el));
  let production = doubleFactArr.concat(factArr).reduce((a, b) => a * b);
  */