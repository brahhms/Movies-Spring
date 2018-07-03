package movies.models;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;


@Entity 
public class Pelicula {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    private String titulo;
   
    private String sinopsis;
    
    
    @Column(name = "idUsuario")
    private Integer idUsuario;
	
    @ManyToOne
    @JoinColumn(name = "idUsuario" , insertable=false, updatable=false)
    private Usuario usuario;
	///////////////////////////////////////////////////////

	public Pelicula(String titulo, String sinopsis) {
		this.titulo = titulo;
		this.sinopsis = sinopsis;
	}
	public Pelicula() {
	}
	public Pelicula(String titulo, String sinopsis,Integer idUsuario) {
		this.titulo = titulo;	
		this.sinopsis = sinopsis;
		this.idUsuario = idUsuario;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getTitulo() {
		return titulo;
	}
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	public String getSinopsis() {
		return sinopsis;
	}
	public void setSinopsis(String sinopsis) {
		this.sinopsis = sinopsis;
	}
	public Integer getIdUsuario() {
		return idUsuario;
	}
	public void setIdUsuario(Integer idUsuario) {
		this.idUsuario = idUsuario;
	}
    
    
    
}

