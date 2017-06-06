function theBeatlesPlay(musicians, instruments) {
  // const newArr = [];
  var newArr = [];

  for (var i = 0; i < musicians.length; i++) {
    newArr.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return newArr;
}

function johnLennonFacts(factsArray) {
  // let i = 0;
  var i = 0;
  while (i < factsArray.length) {
    factsArray[i] += '!!!';
    i++;
  }

  return factsArray;
}

function iLoveTheBeatles(number) {
  // const arr = [];
  var arr = [];

  do {
    arr.push('I love the Beatles!');
    number++;
  } while (number < 15);

  return arr;
}
