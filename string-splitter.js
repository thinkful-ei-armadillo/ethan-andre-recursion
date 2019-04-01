const stringSplitter = function (str) {

  if (str.indexOf('/') === -1) {
    return str;
  }

  const firstDelimiter = str.indexOf('/');
  const firstPart = str.slice(0, firstDelimiter);
  const rest      = str.slice(firstDelimiter+1);

  return firstPart + stringSplitter(rest);
};

console.log(stringSplitter('02/20/2020'));
