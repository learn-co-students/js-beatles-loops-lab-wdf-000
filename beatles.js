function theBeatlesPlay(array) {
  array[0] += " plays Guitar"
  array[1] += " plays Bass Guitar"
  array[2] += " plays Lead Guitar"
  array[3] += " plays Drums"
  return array
}

function johnLennonFacts(array) {
  for (i=0; i < array.length; i++) {
    array[i] += "!!!"
  }
  return array
}

function iLoveTheBeatles(num) {
  var array = new Array
  switch (num) {
    case 7:
      for (i = 0; i <= num; i++) {
	array.push("I love the Beatles!")
      }
      break;
    case 17:
      array.push("I love the Beatles!")
      break;
  }
  return array
}
