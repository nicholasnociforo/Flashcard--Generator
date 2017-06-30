
function ClozeDeleted (fulltext, partialtext, clozedeletion) {
	this.fulltext = fulltext;
	this.partialtext = partialtext;
	this.clozedeletion = clozedeletion;
	this.printInfo = function() {
	
	if (process.argv[2] === "partialtext") { 
		console.log("What is the answer to this statment?: " + this.partialtext);
	} else if (process.argv[2]=== "clozedeletion"){
	console.log("Where does this phrase fit in?: " + this.clozedeletion);
	} else if (process.argv[2]=== "fulltext") {
		console.log ("The full phrase is: " + this.fulltext)
	} else if (process.argv[2] === "front"){
		console.log("");

	} else if (process.argv[2] === "back"){
		console.log("");
		
	} else {
		console.log("Oops you typed in the wrong thing!");
		
	}

};

};

var s1 = new ClozeDeleted ("Independence Hall in Philadelphia, Pennsylvania is the site where the Declaration of Independence and the Constitution were written.", "__________ in Philadelphia, Pennsylvania is the site where the Declaration of Independence and the Constitution were written.", "Independence Hall");
var s2 = new ClozeDeleted ("Sandra Day O'Connor was the first female Supreme Court Justice.", "__________ was the first female Supreme Court Justice.", "Sandra Day O'Connor");
var s3 = new ClozeDeleted ("It takes Mercury 90 days to orbit the sun.", "It takes Mercury _____ days to orbit the sun.", "90");

s1.printInfo();
s2.printInfo();
s3.printInfo();
module.exports = ClozeDeleted;