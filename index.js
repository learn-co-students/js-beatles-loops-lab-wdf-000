function theBeatlesPlay(musicians, instruments) {
  var a = []
  for (let i = 0; i < musicians.length; i++) {
    a.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return a
}

function johnLennonFacts(array) {
  var i = 0
  var a = []
  while(i < array.length) {
    a.push(`${array[i]}!!!`)
    i++
  }
  return a
}


function iLoveTheBeatles(n){
  var a = []
  do {
    a.push("I love the Beatles!")
    n++
  } while(n < 15);
  return a
}
