
app.factory('addShowFactory', function(){

	var addShow = function(show){

		var Show = Parse.Object.extend("Shows");
		var newShow = new Show;

		newShow.set("Movie",show.id);
		newShow.set("Time");

		var deferred = $q.defer();

		newShow.save(null,{
			success:function(newShow){
				deferred.resolve(newShow);
			},
			error: function(error){
				deferred.reject("Une erreur est survenue");
			}
		})
	}

	return{
		addShow : addShow
	}
})