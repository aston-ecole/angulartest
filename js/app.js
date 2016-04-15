(function(){
	var app = angular.module('store', []);
	app.controller('StoreController', function(){
	this.product = gem;
	});
	var gem = [
		{
		name : 'Diamond',
		price : 2.95,
		description : "nothing",	
		disponible : 1,
		cache : false
		},
		{
		name : 'Diamond2	',
		price : 6.90,
		description : "WOUAH",	
		disponible : 8,
		cache : false
		}
	]
})();
