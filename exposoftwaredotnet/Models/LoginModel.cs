using System.Diagnostics;
using System.Reflection.Metadata;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Security.Cryptography;
using System.Linq;
using System.Threading.Tasks;
using Entity;

namespace exposoftwaredotnet.Models
{
    public class LoginInputModel
    {
        public string UserName { get; set; }
        public string Password { get; set; }
        
    }
    public class LoginViewModel : LoginInputModel
    {

        public LoginViewModel(){

        }
        public LoginViewModel(User user){
            UserName = user.UserName;
            Password = user.Password;
            Email = user.Email;
            Rol = user.Rol;
            Estado = user.Estado;
            Token = user.Token;
        }
        public string Email { get; set; }
        public string Rol { get; set; }
        public string Estado { get; set; }
         public string Token { get; set; }
    }
}