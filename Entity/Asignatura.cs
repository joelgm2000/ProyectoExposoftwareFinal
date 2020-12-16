using System;
using System.ComponentModel.DataAnnotations;

namespace Entity
{
    public class Asignatura
    {
        [Key]
        public string IdAsignatura { get; set; }
        public string Nombre { get; set; }
        public string NombreArea { get; set; }

    }
}