package movies.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import movies.models.Usuario;
import movies.repositories.UsuarioRepository;




@Controller  
@RequestMapping(path="/user") 
public class UsuarioController {
	@Autowired 
	private UsuarioRepository _u;
	
	@PostMapping(path="/save")
	@ResponseBody
	public  String addNewUser (@RequestParam String username,@RequestParam String email
			, @RequestParam String password) {

		if(_u.existsByEmail(email) ){
			return "ya existe una cuenta asociada a "+email;
		}else {
			Usuario n = new Usuario();
			n.setNombre(username);
			n.setEmail(email);
			n.setClave(password);
			_u.save(n);
			return "Su usuario ha sido creado!";
		}
		
	}
	

}
