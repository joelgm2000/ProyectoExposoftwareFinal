using Entity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace exposoftwaredotnet.Models
{
    public class DescripcionCInputModel
    {
        public decimal P1 { get; set; }
        public decimal P2 { get; set; }
        public decimal P3 { get; set; }

        public decimal Valor { get; set; }
        public int IdProyecto { get; set; }
    }
     public class DescripcionCViewModel : DescripcionCInputModel
    {
        public DescripcionCViewModel(){

        }
        public DescripcionCViewModel(DescripcionCalificacion descripcion){
            IdDescripcion = descripcion.IdDescripcion;
            P1 = descripcion.P1;
            P2 = descripcion.P2;
            P3 = descripcion.P3;
            Valor = descripcion.Valor;
            IdProyecto = descripcion.IdProyecto;
        }
        public int IdDescripcion { get; set; }
        
    }
}