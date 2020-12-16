using Entity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace exposoftwaredotnet.Models
{
    public class AreaInputModel
    {
         [Required(ErrorMessage = "El código del area es requerido")]
        public string IdArea { get; set; }

        [Required(ErrorMessage = "El nombre del area es requerido")]
        public string Nombre { get; set; }
        
    }
     public class AreaViewModel : AreaInputModel
    {
        public AreaViewModel(){

        }
        public AreaViewModel(Area area){
            IdArea = area.IdArea;
            Nombre = area.Nombre;
        }
    }

}