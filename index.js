function theBeatlesPlay(musicians, instruments) {
  var tbp = [];
  for (var i = 0; i < musicians.length; i++) {
    tbp.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return tbp;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!";
    ++i;
  }
  return facts;
}

function iLoveTheBeatles(num) {
  var ilb = [];
  do {
    ilb.push("I love the Beatles!");
    ++num;
  } while (num < 15);
  return ilb;
}
