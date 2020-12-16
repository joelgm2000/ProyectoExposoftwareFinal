using Entity;
using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace exposoftwaredotnet.Models
{
    public class ProyectoInputModel
    {

        [Required(ErrorMessage = "Primero debe registrar al docente")]
        public string Identificacion { get; set; }
        public string Estudiante1 { get; set; }
        public string Estudiante2 { get; set; }

        [Required(ErrorMessage = "La asignatura es requerida")]
        public string Asignatura { get; set; } 

        [Required(ErrorMessage = "El título es requerido")]
        public string Titulo { get; set; }

        [Required(ErrorMessage = "El semestre es requerido")]
        [Range(3,10,ErrorMessage="Solo son aptos del 3 semestre en adelante")]

        public string Semestre { get; set; }

        [Required(ErrorMessage = "El resumen es requerido")]
        [StringLength(250, ErrorMessage = "Máximo 250 caracteres")]
        public string Resumen { get; set; } 

        [Required(ErrorMessage = "La metodológiia es requerida")]
         [StringLength(250, ErrorMessage = "Máximo 250 caracteres")]
        public string Metodologia { get; set; }

        [Required(ErrorMessage = "El resultado es requerido")]
         [StringLength(250, ErrorMessage = "Máximo 250 caracteres")]
        public string Resultados { get; set; } 
        
    }
     public class ProyectoViewModel : ProyectoInputModel
        {
            public ProyectoViewModel()
            {

            }
            public ProyectoViewModel(Proyecto proyecto)
            {
                IdProyecto = proyecto.IdProyecto;
                Identificacion = proyecto.Identificacion;
                Estudiante1 = proyecto.Estudiante1;
                Estudiante2 = proyecto.Estudiante2;
                Asignatura = proyecto.Asignatura;
                Titulo = proyecto.Titulo;
                Semestre = proyecto.Semestre;
                Resumen = proyecto.Resumen;
                Metodologia = proyecto.Metodologia;
                Resultados = proyecto.Resultados;
                Estado = proyecto.Estado;
                Observacion = proyecto.Observacion;
            }
            public int IdProyecto { get; set; }
            public string Estado { get; set; }
            public string Observacion { get; set; }
        }
}