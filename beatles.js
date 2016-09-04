function johnLennonFacts(arr) {
  for (var i = 0, len = arr.length; i < len; i++) {
    arr[i] = arr[i] + "!!!";
  }
  return arr;
}

function theBeatlesPlay(musicians,instruments) {
  var tmp = [];
  for (var i = 0, len = musicians.length; i < len; i++) {
    tmp.push(musicians[i] + " plays " + instruments[i]);
  }
  return tmp;
}

function iLoveTheBeatles(num) {
  var tmp = [];
  if (num > 16) {
    return ["I love the Beatles!"];
  } else {
    for (var i = 0; i <= num; i++) {
      tmp.push("I love the Beatles!");
    }
  }
  return tmp;
}
