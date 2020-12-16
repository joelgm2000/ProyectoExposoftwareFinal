using Entity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace exposoftwaredotnet.Models
{
    public class AsignaturaInputModel
    {
        [Required(ErrorMessage = "El código de la asignatura es requerido")]
        public string IdAsignatura { get; set; }

        [Required(ErrorMessage = "El nombre de la asignatura es requerido")]
        public string Nombre { get; set; }

        [Required(ErrorMessage = "La Asignatura debe pertenecer a un area")]
        public string NombreArea { get; set; }
    }

    public class AsignaturaViewModel : AsignaturaInputModel
    {
        public AsignaturaViewModel(){

        }
        public AsignaturaViewModel(Asignatura asignatura){
            IdAsignatura = asignatura.IdAsignatura;
            Nombre = asignatura.Nombre;
            NombreArea = asignatura.NombreArea;
        }
    }
}