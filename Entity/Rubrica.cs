using System.ComponentModel.DataAnnotations;
namespace Entity
{
    public class Rubrica
    {
        [Key]
        public string IdRubrica { get; set; }
        
        public string IdArea { get; set; }
    }
}