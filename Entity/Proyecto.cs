using System.ComponentModel.DataAnnotations;

namespace Entity
{
    public class Proyecto
    {
        [Key]
        public int IdProyecto { get; set; }
        public string Identificacion { get; set; }
        public string Estudiante1 { get; set; }
        public string Estudiante2 { get; set; }
        public string Asignatura { get; set; } 
        public string Titulo { get; set; }
        public string Semestre { get; set; }
        public string Resumen { get; set; } 
        public string Metodologia { get; set; }
        public string Resultados { get; set; }         
        public string Estado { get; set; }
        public string Observacion { get; set; }
    }
}