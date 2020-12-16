using Entity;
using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace exposoftwaredotnet.Models
{
    public class EstudianteInputModel
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

        [StringLength(10, ErrorMessage = "Máximo 10 digitos en el campo del celular")]
        public string Celular { get; set; } 
        [Required(ErrorMessage = "El Correo  es requerido")]
        [RegularExpression(@"^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$", ErrorMessage = "Correo no valido")]
        public string Correo { get; set; }
        
    }
     public class EstudianteViewModel : EstudianteInputModel
        {
            public EstudianteViewModel()
            {

            }
            public EstudianteViewModel(Estudiante estudiante)
            {
                Identificacion = estudiante.Identificacion;
                PrimerNombre = estudiante.PrimerNombre;
                SegundoNombre = estudiante.SegundoNombre;
                PrimerApellido = estudiante.PrimerApellido;
                SegundoApellido = estudiante.SegundoApellido;
                Celular = estudiante.Celular;
                Correo = estudiante.Correo;
            }

        }
}