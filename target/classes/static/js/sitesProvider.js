
function fetchSites(){
	gGrid._ready = false;
	var sites = [];  
	$.getJSON("/getFavoriteMovies",{}, function(response){
		try {		 				
			for (var i = 0; i < response.length; i++) {
				var site = new Site();
				site.id = response[i].id;
				site.titulo = response[i].titulo;
				site.sinopsis = response[i].sinopsis;
				site.enableDeleteControl();
				sites.push(site);
			  }
			gGrid._sites = sites;
			gGrid._ready = true;
			gGrid.refresh();
		} catch (e) {}
		
	});
}

function deleteSite(aId){
	var settings = {
			  async: true,
			  crossDomain: true,
			  url: "/deleteMovie",
			  method: "POST",
			  data: {idPelicula:aId }
			}

			$.ajax(settings).done(function (response) {
			  console.log(response);
			});
}

function addSite(aTitulo,aSinopsis){
	var settings = {
			  async: true,
			  crossDomain: true,
			  url: "/addMovie",
			  method: "POST",  
			  data: {titulo:aTitulo ,sinopsis:aSinopsis }
			}

			$.ajax(settings).done(function (response) {
			  console.log(response);
			});
}


