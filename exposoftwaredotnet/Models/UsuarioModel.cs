using Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace exposoftwaredotnet.Models
{
    public class UsuarioInputModel
    { 
        public string Identificacion { get; set; }
        public string User { get; set; } 
        public string Contrasena { get; set; }
        public string TipoDocente { get; set; }        
    }
     public class UsuarioViewModel : UsuarioInputModel
        {
            public UsuarioViewModel()
            {

            }
            public UsuarioViewModel(Usuario usuario)
            {
                Identificacion = usuario.Identificacion;
                User = usuario.User;
                Contrasena = usuario.Contrasena;
                TipoDocente = usuario.TipoDocente;
                
            }
          
        }
}