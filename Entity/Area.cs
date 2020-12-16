using System;
using System.ComponentModel.DataAnnotations;

namespace Entity
{
    public class Area
    {
        [Key]
        public string IdArea { get; set; }
        public string Nombre { get; set; }
    }
}