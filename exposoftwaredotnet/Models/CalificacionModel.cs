using Entity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace exposoftwaredotnet.Models
{
    public class CalificacionInputModel
    {
        [Required(ErrorMessage = "La identificación del líder de proyecto es requerida")]
        public string Identificacion { get; set; }

        [Required(ErrorMessage = "La rúbrica es requerida")]
        public string IdRubrica { get; set; }
        [Required(ErrorMessage = "El Código del proyecto es requerido")]
        public int IdProyecto { get; set; }
        
        
        [Required(ErrorMessage = "Debe asignarle un docente evaluador")]
        public string Evaluador { get; set; }
    }
     public class CalificacionViewModel : CalificacionInputModel
    {
        public CalificacionViewModel(){

        }
        public CalificacionViewModel(Calificacion calificacion){
            IdCalificacion = calificacion.IdCalificacion;
            Identificacion = calificacion.Identificacion;
            IdRubrica = calificacion.IdRubrica;
            IdProyecto = calificacion.IdProyecto;
            Fecha = calificacion.Fecha;
            Evaluador = calificacion.Evaluador;
        }
        public int IdCalificacion { get; set; }
        public System.DateTime Fecha { get; set; }
        
    }
}