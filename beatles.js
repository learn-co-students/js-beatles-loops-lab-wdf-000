function theBeatlesPlay(musicians, instruments) {
	for (i=0; i < musicians.length; i++) {
		musicians[i] += ` plays ${instruments[i]}`;
	}
	return musicians;
}

function johnLennonFacts(facts) {
	for (i=0; i < facts.length; i++) {
		facts[i] += "!!!";
	}
	return facts;
}

function iLoveTheBeatles(n) {
	var array = new(Array);
	do {
		array.push("I love the Beatles!");
		n++;
	} while (n < 15);
	return array;
}