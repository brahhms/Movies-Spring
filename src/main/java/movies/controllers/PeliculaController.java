package movies.controllers;
import java.security.Principal;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import movies.repositories.UsuarioRepository;
import movies.models.Pelicula;
import movies.repositories.PeliculaRepository;


@Controller  

public class PeliculaController {
	@Autowired 
	private PeliculaRepository _peli;
	@Autowired 
	private UsuarioRepository _u;
	
	Principal p;

	@GetMapping(path="/getUsername")
	@ResponseBody
	public String getName(HttpServletRequest request) {
		p = request.getUserPrincipal();	
				
		return _u.findNombreByEmail(p.getName()) ;
	}
	
	
	@GetMapping(path="/getFavoriteMovies")
	@ResponseBody
	public Iterable<Pelicula> getAllMovies(HttpServletRequest request) {
		p = request.getUserPrincipal();		
		Integer id = _u.findIdUsuarioByEmail(p.getName());
		
		return _peli.findByidUsuario(id);
	}
	
	@PostMapping(path="/addMovie")
	@ResponseBody 
	public String addNewMovie (HttpServletRequest request ,@RequestParam String titulo			
			, @RequestParam String sinopsis ) {
		p = request.getUserPrincipal();
		Integer id = _u.findIdUsuarioByEmail(p.getName());
				

		if(_peli.existsByTituloAndIdUsuario(titulo, id)) {
			return "Ya existe "+titulo+" para este usuario";		
		}else {		
			Pelicula n = new Pelicula(titulo,sinopsis,id);

			_peli.save(n);
			return titulo+" Ha sido guardada!";
		}
	}
	
	@PostMapping(path="/deleteMovie")
	@ResponseBody 
	public String deleteMovie (HttpServletRequest request ,@RequestParam Integer idPelicula) {
		p = request.getUserPrincipal();
		Integer id = _u.findIdUsuarioByEmail(p.getName());
			
			Pelicula peli = _peli.findByid(idPelicula);
			if (id == peli.getIdUsuario()) {
				_peli.delete(peli);
				return "Ha sido borrada!";
			}else {
				return "no permitido";
			}		
	}

	
}
