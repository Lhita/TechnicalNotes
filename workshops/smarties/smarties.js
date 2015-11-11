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

//findSmartiesByColor();

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

var groupSmarties = function(){

};

var sortSmarties = function(){

};

var addTotalForTeams = function(){

};
