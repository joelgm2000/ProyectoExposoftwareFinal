using System.ComponentModel.DataAnnotations;

namespace Entity
{
    public class Pendon
    {
        [Key]
        public int IdPendon { get; set; }   
        public int IdProyecto { get; set; } 
        public string Titulo { get; set; }
        public string Introduccion { get; set; }    
        public string Metodologia { get; set; }
        public string Resultados { get; set; }
        public string Objetivos { get; set; }
        public string Conclusion { get; set; }
        public string Referencias { get; set; }
        public string Observacion { get; set; } 
        public string Estado { get; set; }
    }
}