using Entity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace exposoftwaredotnet.Models
{
    public class ItemsRubricaInputModel
    {
        [Required(ErrorMessage = "El código de la rúbrica es requerido")]
        public string IdRubrica { get; set; }

        public string Item { get; set; }

        [Required(ErrorMessage = "La descripcion es requerido")]
        public string Descripcion { get; set; }
    }
    public class ItemsRubricaViewModel : ItemsRubricaInputModel
    {
        public ItemsRubricaViewModel(){

        }
        public ItemsRubricaViewModel(ItemsRubrica item){
            IdRubrica = item.IdRubrica;
            Item = item.Item;
            Descripcion = item.Descripcion;
        }
    }
}