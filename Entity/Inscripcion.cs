using System.ComponentModel.DataAnnotations;

namespace Entity
{
    public class Inscripcion
    {
        [Key]
        public int IdInscripcion { get; set; }
        public int IdProyecto { get; set; } 
        public string Estado { get; set; }
        public string Identificacion { get; set; }
        public string Estudiante1 { get; set; }
        public string Estudiante2 { get; set; }
        public string Estudiante3 { get; set; }
        public string Estudiante4 { get; set; }
        public string Estudiante5 { get; set; }
        public string Estudiante6 { get; set; }
        public string Estudiante7 { get; set; }
        public string Estudiante8 { get; set; }
        public string Estudiante9 { get; set; }
        public string Estudiante10 { get; set; }
        public System.DateTime Fecha { get; set; }
    }
}