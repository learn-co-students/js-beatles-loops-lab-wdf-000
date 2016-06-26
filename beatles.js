function theBeatlesPlay(ms,is){
  var arr = [];

  for (let i=0; i<ms.length; i++){
    arr.push(ms[i] + " plays " + is[i]);
  }
  return arr;
}

function johnLennonFacts(facts){
  var i = 0;
  
  while (i < facts.length){
    facts[i++] += "!!!";
  }
  return facts;
}

function iLoveTheBeatles(n){
  var arr = [];

  do {
    arr.push("I love the Beatles!")
  } while (n++ < 14);

  return arr;
}
