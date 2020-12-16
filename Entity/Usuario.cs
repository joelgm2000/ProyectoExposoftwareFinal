using System.ComponentModel.DataAnnotations;

namespace Entity
{
    public class Usuario
    {
        [Key]
        public string User { get; set; }
        public string Contrasena { get; set; }
        public string TipoDocente { get; set; }
        public string Identificacion { get; set; }
    }
}