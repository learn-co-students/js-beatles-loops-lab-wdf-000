function theBeatlesPlay(players, instruments) {
  result = [];
  for (var i = 0; i < 4; i++){
    result.push(players[i] + " plays " + instruments[i])
  }
  return result;
}

function johnLennonFacts(facts) {
  var new_facts = [];
  while (facts.length > 0){
  fact = facts.shift() + "!!!";
  new_facts.push(fact);
  }
  return new_facts;
}

function iLoveTheBeatles(num) {
  arr = [];
  do{
    arr.push("I love the Beatles!");
    num++;
  }while(num < 15);
  return arr;
}
