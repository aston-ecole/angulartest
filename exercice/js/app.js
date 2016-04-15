(function(){

	var app = angular.module('boutiqueenligne', []);
	app.controller('boutiqueController',function(){
		this.produit = vapot;
	});

	var vapot = {
		nom: 'Box1',
		price: 70.0,
		description : 'box de la mort',
		quantite: 10		
	};

})();