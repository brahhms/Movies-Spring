

function fetchMovies(){
	gGrid._ready = false;
	var sites = [];  
	var inp = $("#s").val();
	$.getJSON("http://www.omdbapi.com/?apikey=f8e6fcec&page=1&s="+inp,{}, function(response){
		try {		 		
			var movies = response.Search;
			for (var i = 0; i < movies.length; i++) {
				var site = new Site();
				site.titulo = movies[i].Title;
				site.sinopsis = "";
				site.poster = movies[i].Poster;
				site.enableAddControl();
				sites.push(site);
			  }
			gGrid._sites = sites;
			gGrid._ready = true;
			gGrid.refresh();
		} catch (e) {}
		
	});
}

function buildSite(aTitulo){

	$.getJSON("http://www.omdbapi.com/?apikey=f8e6fcec&t="+aTitulo,{}, function(response){
		try {		 		
			addSite(aTitulo,response.Plot);
		} catch (e) {}
		
	});
}