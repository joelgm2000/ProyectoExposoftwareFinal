using Entity;
using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace exposoftwaredotnet.Models
{
    public class PendonInputModel
    {
        [Required(ErrorMessage = "El proyecto es requerido")] 
        public int IdProyecto { get; set; }
        [Required(ErrorMessage = "El título es requerido")] 
        public string Titulo { get; set; }
        [Required(ErrorMessage = "La introducción es requerida")]
        public string Introduccion { get; set; }    
        [Required(ErrorMessage = "La metodología es requerida")]
        public string Metodologia { get; set; }
        [Required(ErrorMessage = "El resultado es requerido")]
        public string Resultados { get; set; }
        [Required(ErrorMessage = "El objetivo es requerido")]
        public string Objetivos { get; set; }
        [Required(ErrorMessage = "La conclusión es requerida")]
        public string Conclusion { get; set; }
        public string Referencias { get; set; }

    }
    public class PendonViewModel : PendonInputModel
        {
            public PendonViewModel()
            {

            }
            public PendonViewModel(Pendon pendon)
            {
                IdPendon = pendon.IdPendon;
                IdProyecto = pendon.IdProyecto;
                Titulo = pendon.Titulo;
                Introduccion = pendon.Introduccion;
                Metodologia = pendon.Metodologia;
                Resultados = pendon.Resultados;
                Objetivos = pendon.Objetivos;
                Conclusion = pendon.Conclusion;
                Referencias = pendon.Referencias;
                Estado = pendon.Estado;
                Observacion = pendon.Observacion;
            }
            public int IdPendon { get; set; }   
            public string Observacion { get; set; } 
             public string Estado { get; set; }
        }
}