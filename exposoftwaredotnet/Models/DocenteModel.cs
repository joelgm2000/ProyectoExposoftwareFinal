using Entity;
using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace exposoftwaredotnet.Models
{
    public class DocenteInputModel
    {
        [Required(ErrorMessage = "La identificación es requerida")]
        [StringLength(10, ErrorMessage = "Máximo 10 digitos en la identificación")]
        public string Identificacion { get; set; }

        [Required(ErrorMessage = "El primer nombre  es requerido")]
        public string PrimerNombre { get; set; }
        
        public string SegundoNombre { get; set; }

        [Required(ErrorMessage = "El primer apellido es requerido")]
        public string PrimerApellido { get; set; }

        [Required(ErrorMessage = "El segundo apellido es requerido")]
        public string SegundoApellido { get; set; }

        [Required(ErrorMessage = "El celular  es requerido")]
        [StringLength(10, ErrorMessage = "Máximo 10 digitos en el campo del celular")]
        public string Celular { get; set; } 

        [Required(ErrorMessage = "El Correo  es requerido")]
        [RegularExpression(@"^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$", ErrorMessage = "Correo no valido")]
        public string Correo { get; set; }

        [Required(ErrorMessage = "El perfil es requerido")]
        public string Perfil { get; set; }  
        
        [Required(ErrorMessage = "El Area es requerido")]
        public string NombreArea { get; set; }

        [Required(ErrorMessage = "El tipo del docente es requerido")]
        public string TipoDocente { get; set; }
    }
      public class DocenteViewModel : DocenteInputModel
        {
            public DocenteViewModel()
            {

            }
            public DocenteViewModel(Docente docente)
            {
                Identificacion = docente.Identificacion;
                PrimerNombre = docente.PrimerNombre;
                SegundoNombre = docente.SegundoNombre;
                PrimerApellido = docente.PrimerApellido;
                SegundoApellido = docente.SegundoApellido;
                Celular = docente.Celular;
                Correo = docente.Correo;
                Perfil = docente.Perfil;
                NombreArea = docente.NombreArea;
                TipoDocente = docente.TipoDocente;
            }
        }
}