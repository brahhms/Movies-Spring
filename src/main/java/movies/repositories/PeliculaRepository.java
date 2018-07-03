package movies.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import movies.models.Pelicula;



public interface PeliculaRepository extends JpaRepository<Pelicula, Long> {
	
	Iterable<Pelicula> findByidUsuario(Integer idUsuario);
	Pelicula findByid(Integer id);

	Boolean existsByTituloAndIdUsuario(String titulo,Integer idUsuario);
}
