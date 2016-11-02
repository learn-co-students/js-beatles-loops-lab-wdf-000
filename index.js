function theBeatlesPlay(musicians, instruments) {
 var newArray = new Array();
  for (let i = 0; i < musicians.length; i++) {
    var newString = `${musicians[i]} plays ${instruments[i]}`
    newArray.push(newString);
  }
  return newArray;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = `${facts[i]}!!!`
    i += 1;
  }
  return facts;
}

function iLoveTheBeatles(num) {
  var newArray = new Array();
  do{
    newArray.push("I love the Beatles!")
    num += 1
  } while (num < 15);
  return newArray
}
