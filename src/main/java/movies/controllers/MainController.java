package movies.controllers;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class MainController {
	
	@GetMapping(value = "/")
	  public String raiz() {
	      return "/index";
	  }
	
	@GetMapping(value = "/index")
	  public String home() {
	      return "/index";
	  }
	
	@GetMapping(value = "/login")
	  public String login() {
	      return "/login";
	  }
	@GetMapping(value = "/favorites")
	  public String favorites() {
	      return "/favorites";
	  }
	

	
}
