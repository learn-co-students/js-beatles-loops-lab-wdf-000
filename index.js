function theBeatlesPlay(musician_arr, instrument_arr){
  var arr = []
  for ( let i = 0; i < musician_arr.length; i++ ){
    arr.push(`${musician_arr[i]} plays ${instrument_arr[i]}`);
  }
  return arr;
}

function johnLennonFacts(facts_arr){
  var i = 0
  while (i < facts_arr.length){
    facts_arr[i] = facts_arr[i] + "!!!";
    i++;
  }
  return facts_arr;
}

function iLoveTheBeatles(num){
  var arr = [];
  do{
    arr.push("I love the Beatles!")
    num++
  } while (num < 15)
  return arr;
}
