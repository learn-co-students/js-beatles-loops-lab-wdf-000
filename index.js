function theBeatlesPlay(musiciansArr, instrumentsArr){
	var array = []

	for (let i = 0; i < musiciansArr.length; i++){
		array.push(`${musiciansArr[i]} plays ${instrumentsArr[i]}`)
	}

	return array;
}

function johnLennonFacts(array){
	var i = 0;
	while(i < array.length){
		array[i] = array[i] + "!!!";
		i++;
	}

	return array;
}

function iLoveTheBeatles(number){
  debugger;
  var array = [];
  do{
    array.push("I love the Beatles!");
    number++;
  } while(number < 15);

  return array;
}