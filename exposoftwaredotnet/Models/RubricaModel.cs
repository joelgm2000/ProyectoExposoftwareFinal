using Entity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace exposoftwaredotnet.Models
{
    public class RubricaInputModel
    {
        [Required(ErrorMessage = "El código de la rúbrica es requerido")]
        public string IdRubrica { get; set; }

        [Required(ErrorMessage = "La rúbrica debe estar asignada a un area")]    
        public string IdArea { get; set; }
    }
    public class RubricaViewModel : RubricaInputModel
    {
        public RubricaViewModel(){

        }
        public RubricaViewModel(Rubrica rubrica){
            IdRubrica = rubrica.IdRubrica;
            IdArea = rubrica.IdArea;
        }
    }
}