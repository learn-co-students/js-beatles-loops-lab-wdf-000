function theBeatlesPlay(musicians, instruments) {
  var musiciansInstruments = [];
  for (var i = 0; i < musicians.length; i++) {
    musiciansInstruments.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return musiciansInstruments;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = `${facts[i]}!!!`;
    i++;
  }
  return facts;
}

function iLoveTheBeatles(i) {
  var love = [];
  do {
    love.push('I love the Beatles!');
    i++
  } while (i < 15);
  return love
}
