const triangularNumber = (num) => {
  console.log(num);
  
  if(num === 1) {
    return 1;
  }

  return num + triangularNumber(num - 1);
};

console.log(triangularNumber(5));