
app.factory('addShowFactory', function(){

	var addShow = function(movie,date){

		var Show = Parse.Object.extend("Shows");
		var newShow = new Show;

		newShow.set("Movie",movie.id);
		newShow.set("Time",date);

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