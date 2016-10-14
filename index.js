function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  var counter = 0
  while (counter < facts.length) {
    facts[counter] = facts[counter] + "!!!";
    counter++;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    if (number === 17) {
      array.push("I love the Beatles!")
      break
    }
    else {
    number--
    array.push("I love the Beatles!")
  }
  } while (number >= 0);
  return array;
}
