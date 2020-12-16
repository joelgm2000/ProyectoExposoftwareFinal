using System.ComponentModel.DataAnnotations;

namespace Entity
{
    public class Docente
    {
        [Key]
        public string Identificacion { get; set; }
        public string PrimerNombre { get; set; }
        public string SegundoNombre { get; set; }
        public string PrimerApellido { get; set; }
        public string SegundoApellido { get; set; }
        public string Celular { get; set; } 
        public string Correo { get; set; }
        public string Perfil { get; set; }
        public string NombreArea { get; set; }
        public string TipoDocente { get; set; } 
    }
}
