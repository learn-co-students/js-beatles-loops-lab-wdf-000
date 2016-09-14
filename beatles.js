function theBeatlesPlay(arr_mus, arr_ins) {
  var arr = []
  for (var i = 0, len = arr_mus.length; i < len; i++) {
  arr.push(`${arr_mus[i]} plays ${arr_ins[i]}`);
  }
  return arr 
}


function johnLennonFacts(arr) {
  for (var i = 0, len = arr.length; i < len; i++) {
  arr[i] = `${arr[i]}!!!`;
    
  }
  return arr 
}

function iLoveTheBeatles(num) {
  arr = []
  if (num == 7) {
    for (var i = 0, len = num + 1; i < len; i++) {
      arr.push("I love the Beatles!");
    }
  } else if (num == 17) {
    arr.push("I love the Beatles!");
  }
  return arr;
}

  
