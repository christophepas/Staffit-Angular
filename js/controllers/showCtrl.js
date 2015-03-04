
app.controller('showCtrl', function($scope,addShowFactory){
	
	$scope.addShow = function(){
		addShowFactory.addShow().then(function(newShow){

			//Afficher les shows du movie

		}, function errorCallback(message){

			//Afficher une erreur

		})
	}
});