using Entity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace exposoftwaredotnet.Models
{
    public class InscripcionInputModel
    {
         [Required(ErrorMessage = "El código de la inscripcion es requerido")]
        public int IdInscripcion { get; set; }
        [Required(ErrorMessage = "Registre la información del proyecto")]
        public int IdProyecto { get; set; }
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
     public class InscripcionViewModel : InscripcionInputModel
    {
        public InscripcionViewModel(){

        }
        public InscripcionViewModel(Inscripcion inscripcion){
            IdInscripcion = inscripcion.IdInscripcion;
            IdProyecto = inscripcion.IdProyecto;
            Estado = inscripcion.Estado;
            Identificacion = inscripcion.Identificacion;
            Estudiante1 = inscripcion.Estudiante1;
            Estudiante2 = inscripcion.Estudiante2;
            Estudiante3 = inscripcion.Estudiante3;
            Estudiante4 = inscripcion.Estudiante4;
            Estudiante5 = inscripcion.Estudiante5;
            Estudiante6 = inscripcion.Estudiante6;
            Estudiante7 = inscripcion.Estudiante7;
            Estudiante8 = inscripcion.Estudiante8;
            Estudiante9 = inscripcion.Estudiante9;
            Estudiante10 = inscripcion.Estudiante10;
            Fecha = inscripcion.Fecha;
        }
        public string Estado { get; set; }
    }
}