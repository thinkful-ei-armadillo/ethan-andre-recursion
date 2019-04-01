

const countSheep = function (numSheep) {

  if (numSheep === 0) {
    return console.log('All sheep jumped over the fence');
  }

  const newNum = numSheep - 1;

  console.log(`${numSheep}: Another sheep jumped over the fence`);

  countSheep(newNum);

};

countSheep(3);
