const reverseStr = (str) => {
  if(str.length === 0) {
    return '';
  }

  // append last character to beginning, then pass modfied str into reverseStr()
  return str.slice(-1) + reverseStr(str.slice(0, -1));
};

console.log(reverseStr('hey there'));