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
  var array = []
  do {
    number++
    array.push("I love the Beatles!")
  } while (number < 15);
  return array;
}
