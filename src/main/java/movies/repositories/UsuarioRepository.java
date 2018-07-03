package movies.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import movies.models.Usuario;



public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

	Boolean existsByEmail(String email);
	Usuario findByEmail(String email);
	
	@Query("SELECT u.id FROM Usuario u where u.email = :email") 
	Integer findIdUsuarioByEmail(@Param("email") String email);
	
	@Query("SELECT u.nombre FROM Usuario u where u.email = :email") 
	String findNombreByEmail(@Param("email") String email);
	
}
