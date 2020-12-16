using System.ComponentModel.DataAnnotations;

namespace Entity
{
    public class Calificacion
    {
        [Key]
        public int IdCalificacion { get; set; }
        public string Identificacion { get; set; }
        public string IdRubrica { get; set; }
        public int IdProyecto { get; set; }
        public System.DateTime Fecha { get; set; }
        public string Evaluador { get; set; }
    }
}