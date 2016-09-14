function theBeatlesPlay(musicians, instruments) {
  for (i=0; i < musicians.length; i++) {
    musicians[i] += ` plays ${instruments[i]}`;
  }
  return musicians;
}

function johnLennonFacts(array) {
  for (i=0; i < array.length; i++) {
    array[i] += "!!!";
  }
  return array;
}

function iLoveTheBeatles(num) {
  var array = new(Array)
  if (num < 17)
    for (i = 0; i <= num; i++) {
	    array.push("I love the Beatles!");
    }
  else
    array.push("I love the Beatles!");
  return array
}
