
const powerCalculatorRec = function (base, exponent) {

  // Base case
  if (exponent === 1) {
    return base;
  }

  // Error case
  if (exponent < 0) {
    return 'exponent should be >= 0';
  }

  return powerCalculatorRec(base * base, exponent-1);
};

console.log('10,2 => ', powerCalculatorRec(10, 2));    //  => 100
