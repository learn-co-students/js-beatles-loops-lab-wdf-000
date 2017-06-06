function theBeatlesPlay(m, z){
  var array = [];
  var i = 0;
  for(i; i<m.length; i++){
    array.push(`${m[i]} plays ${z[i]}`)
  }
  return array
}

function johnLennonFacts(input){
  var i =0;
  for(i; i < input.length; i++){
    input[i] = input[i] + "!!!"
  }
  return input
}

function iLoveTheBeatles(number){
  var arr = []
  do{
     arr.push('I love the Beatles!')
     number += 1;
  }while( number < 15)
  return arr
}
