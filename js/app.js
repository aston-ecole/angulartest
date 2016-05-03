(function(){
	var app = angular.module('store', []);
	// controller Store
	app.controller('StoreController', function(){
	this.product = gem;
	});
	// controller panel
	app.controller("PanelController", function(){
		this.tab =1;
		
		this.selectTab = function(setTab) { // fonction selection tab
		this.tab = setTab;
		};
		
		this.isSelected = function(checkTab){ // fonction is selected
		return this.tab === checkTab;
		};
	});
	// data
	var gem = [
		{
		name : 'Diamond',
		price : 2.95,
		description : "nothing",	
		disponible : 1,
		cache : false,
		image : [{
			full: 'img/diamond.jpg',
			thumb: 'img/diamond.jpg'
		}]
		},
		{
		name : 'Diamond2	',
		price : 6.90,
		description : "WOUAH",	
		disponible : 8,
		cache : false,
		image : [{
			full: 'img/diamond.jpg',
			thumb: 'img/diamond.jpg'
		}]
		}
	]
})();
