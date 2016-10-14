function theBeatlesPlay(musicians, instruments) {
  var musicianInstruments = [];
  for (let i = 0; i < musicians.length; i++) {
    musicianInstruments.push(musicians[i] + " plays " + instruments[i]);
    // console.log(musicianInstruments);
  }
  return musicianInstruments;
}

function johnLennonFacts(facts) {
  var i = 0;
  while ( i < facts.length ) {
    facts[i] += "!!!";
    i++;
  }
  return facts;

  // Solution

    // const shoutedFacts = []
    // let i = 0
    // while (i < facts.length) {
    //   shoutedFacts.push(`${facts[i]}!!!`)
    //   i++
    // }
    // return shoutedFacts
}

function iLoveTheBeatles(num) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return arr;
}
