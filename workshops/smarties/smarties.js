var findSmartiesByColor = function(smarties, color){
	
	for(var i= 0; i<= smarties.length; i++) {
		var smartie = smarties[i];
		console.log(smartie.color);
			if(smartie.color === color) {
				console.log(smartie.qty);
				return smartie;
			}
 	}

};


var findMostAbundantSmartie = function(smarties){
	var bigSmartie = {
			color :  " ",
			qty : 0
	};

	for(var i= 0; i < smarties.length; i++) {
		var currentSmartie = smarties[i];

		if(currentSmartie.qty > bigSmartie.qty) {
			bigSmartie = currentSmartie;
			
		} 
	}
	return bigSmartie;

};

var findSmartiesLessThan = function(smarties, qty){
	var lessSmartie = {
		color : " ",
		qty : 7

	};

	var lessThan = [];

	for(var i= 0; i < smarties.length; i++) {
		var currentSmartie = smarties[i];

		if(currentSmartie.qty < lessSmartie.qty) {
			lessThan.push(currentSmartie);

		}
	}
	console.log(lessThan);
	return lessThan;
};

var findSmarties = function(){

		


};

//check smarties with the same color and group them together
var groupSmarties = function(smartyList){

	var smartieGroup = {};

	for(var i in smartyList) {
		var currentSmartie = smartyList[i];
		console.log(currentSmartie);
		//?? describing of what to do now...
		// var smartieGroup.color =[]
		if(smartieGroup[currentSmartie.color]==undefined){
			console.log(currentSmartie);
			smartieGroup[currentSmartie.color]=0;
		}
		smartieGroup[currentSmartie.color]=smartieGroup[currentSmartie.color]+1

	}
	
	return smartieGroup;
};	

var sortSmarties = function(){

};

var addTotalForTeams = function(){

};
