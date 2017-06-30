function BasicCards (front, back) {
	this.front = front;
	this. back = back;
	this.printQuestion = function() {
	
	if (process.argv[2] === "front") { 
		console.log("What is the answer to this statment?: " + this.front);
	} else if (process.argv[2] === "back") {
	console.log("The back side is: " + this.back);
	} 
};

};

var q1 = new BasicCards ("What is the closest star to earth after the sun?", "Proxima Centauri");
var q2 = new BasicCards("Which state is the 2nd largest in terms of area and population?", "Texas");
var q3 = new BasicCards("From which world power did Luis and Clark purchase the Louisianna territory from?", "France");

q1.printQuestion();
q2.printQuestion();
q3.printQuestion();


module.exports = BasicCards;
