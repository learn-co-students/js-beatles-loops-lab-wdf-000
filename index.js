function theBeatlesPlay(arr1, arr2) {
  var inst = [];
  for (let i = 0; i < arr1.length; i++) {
    var n = arr1[i] + " plays " + arr2[i];
    inst.push(n);
  }
  return inst;
}

function johnLennonFacts(arr) {
  var inst = [];
  var num = 0;
  while (num < arr.length) {
    var n = arr[num] + "!!!";
    inst.push(n);
    num++
  }
  return inst;
}

function iLoveTheBeatles(num) {
  var inst = [];
  var n = "I love the Beatles!";
  do {
    inst.push(n);
    num++;
  } while (num < 15);
  return inst;
}
